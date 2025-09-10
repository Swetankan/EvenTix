// backend/utils/mailer.js
import nodemailer from "nodemailer";

let transporter;

// Development: use console logging (no real emails)
if (process.env.NODE_ENV === "development") {
  transporter = {
    sendMail: async (options) => {
      console.log("📧 Dummy Mailer: Email would be sent with these details:");
      console.log("To:", options.to);
      console.log("Subject:", options.subject);
      console.log("HTML:", options.html);
      return Promise.resolve();
    },
  };
} else {
  // Production: configure real SMTP
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "user@example.com",
      pass: process.env.SMTP_PASS || "password",
    },
  });
}

export default transporter;
