import jwt from "jsonwebtoken";
import User from "../models/User.js";
import transporter from "../utils/mailer.js";

// Utility to generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// @desc   Register new user
// @route  POST /api/auth/register
// @access Public
export const register = async (req, res) => {
  try {
    const { name, email, phone, password, googleId } = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid or missing email" });
    }

    let user;
    if (googleId) {
      // Google OAuth signup
      user = await User.findOne({ $or: [{ googleId }, { email }] });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
      user = await User.create({ name, email, googleId, phone });
    } else {
      // Normal signup
      const phoneRegex = /^\d{10}$/;
      if (!phone || !phoneRegex.test(phone)) {
        return res
          .status(400)
          .json({ message: "Phone number must be exactly 10 digits" });
      }

      if (!password || password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters" });
      }

      const existingEmailUser = await User.findOne({ email });
      if (existingEmailUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const existingPhoneUser = await User.findOne({ phone });
      if (existingPhoneUser) {
        return res.status(400).json({ message: "Phone number already in use" });
      }

      user = await User.create({ name, email, phone, password });
    }

    // Try sending welcome email but don’t block registration if it fails
    try {
      await transporter.sendMail({
        from: '"Event Ticketing" <welcome@example.com>',
        to: user.email,
        subject: "Welcome to Event Ticketing Platform!",
        html: `
          <h1>👋 Welcome, ${user.name || user.email}!</h1>
          <p>Thanks for registering at <b>Event Ticketing Platform</b>.</p>
        `,
      });
    } catch (mailErr) {
      console.warn("⚠️ Email sending failed:", mailErr.message);
      // continue without blocking
    }

    res.status(201).json({
      message: user.googleId
        ? "User registered via Google OAuth"
        : "User registered successfully",
    });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc   Login user with email or phone
// @route  POST /api/auth/login
// @access Public
export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email/phone and password" });
    }

    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    if (!user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    if (user.isBanned) {
      return res.status(403).json({
        message: "Your account has been banned and you cannot log in.",
        banReason: user.banReason,
        bannedAt: user.bannedAt,
      });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user);
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc   Logout user
// @route  POST /api/auth/logout
// @access Protected
export const logout = (req, res) => {
  res.status(200).json({ message: "Logout successful — delete token on client" });
};
