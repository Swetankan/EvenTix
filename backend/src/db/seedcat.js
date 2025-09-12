import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/Category.js";
import { DB_NAME } from "../constants.js";

dotenv.config();

const MONGODB_URI = `${process.env.MONGODB_URI}/${DB_NAME}`;

const categories = [
  { name: "Conference" },
  { name: "Sports" },
  { name: "Festival" },
  { name: "Workshop" },
  { name: "Concert" },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    await Category.deleteMany({});
    console.log("🗑️ Old categories removed");

    const created = await Category.insertMany(categories);
    console.log("🌱 Categories seeded:", created);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding categories:", err);
    process.exit(1);
  }
}

seed();
