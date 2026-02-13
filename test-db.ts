
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Load .env explicitly
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
    console.log("🔍 Testing Database Connection to 'adultstory'...");

    if (!MONGODB_URI) {
        console.error("❌ Error: MONGODB_URI is not defined in .env");
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "adultstory",
        });
        console.log("✅ Successfully connected to MongoDB!");

        const dbName = mongoose.connection.db?.databaseName;
        console.log("📂 Connected to database:", dbName);

        // If it's a new DB, it might not have collections yet
        const collections = await mongoose.connection.db?.listCollections().toArray();
        console.log("📁 Collections found:", collections?.map(c => c.name).join(", ") || "None (New Database)");

        await mongoose.disconnect();
        console.log("👋 Disconnected.");
    } catch (error) {
        console.error("❌ Connection failed!");
        console.error(error);
        process.exit(1);
    }
}

testConnection();
