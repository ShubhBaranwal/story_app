import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import Category from "./models/Category";

// Load .env explicitly
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const MONGODB_URI = process.env.MONGODB_URI;

async function exportCategories() {
    const logs: string[] = [];
    const log = (msg: string) => {
        console.log(msg);
        logs.push(msg);
    };

    log("🔍 Connecting to MongoDB...");

    if (!MONGODB_URI) {
        log("❌ Error: MONGODB_URI is not defined in .env");
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGODB_URI, { dbName: "adultstory" });
        log("✅ Connected to adultstory database.");

        const db = mongoose.connection.db;
        const collections = await db?.listCollections().toArray();
        log(`📁 Collections: ${collections?.map(c => c.name).join(", ")}`);

        if (collections) {
            for (const col of collections) {
                const count = await db?.collection(col.name).countDocuments();
                log(`� ${col.name}: ${count} documents.`);
            }
        }

        await mongoose.disconnect();
        log("👋 Disconnected.");
    } catch (error) {
        log("❌ Export failed!");
        log(String(error));
        process.exit(1);
    } finally {
        fs.writeFileSync("debug-export.log", logs.join("\n"));
    }
}

exportCategories();
