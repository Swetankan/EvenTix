import dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

const client = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
});

client.on("connect", () => {
  console.log("✅ Connected to Local Redis (Memurai)");
});

client.on("error", (err) => {
  console.error("❌ Redis connection error:", err.message);
});

export default client;
