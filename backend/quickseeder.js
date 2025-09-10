import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./src/models/Category.js";
import { DB_NAME } from "./src/constants.js";

dotenv.config();

const seedCategories = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected!");

    const categories = [
      { name: "Concert", description: "Music and live performances" },
      { name: "Conference", description: "Professional events and talks" },
      { name: "Sports", description: "Sports events and tournaments" },
      { name: "Festival", description: "Cultural and seasonal festivals" },
      { name: "Workshop", description: "Learning and training sessions" }
    ];

    await Category.deleteMany(); // clear old
    await Category.insertMany(categories);

    console.log("✅ Categories seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedCategories();
