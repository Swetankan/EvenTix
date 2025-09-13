import dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

const redisUrl = process.env.REDIS_URL || "redis://default:GGZGeYBpQXqNlWTXVKFZzPyxSDYtBDSP@redis.railway.internal:6379";

const client = new Redis(redisUrl);

client.on("connect", () => {
console.log("✅ Connected to Redis");
});

client.on("error", (err) => {
console.error("❌ Redis connection error:", err.message);
});

export default client;
