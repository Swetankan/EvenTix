import dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
console.error("❌ Missing REDIS_URL environment variable");
process.exit(1);
}

const client = new Redis(redisUrl);

client.on("connect", () => {
console.log("✅ Connected to Redis");
});

client.on("error", (err) => {
console.error("❌ Redis connection error:", err.message);
});

export default client;
