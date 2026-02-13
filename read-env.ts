
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");

try {
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, "utf8");
        console.log("📄 .env file found.");
        console.log("📏 Length:", content.length);
        console.log("🔢 Line Count:", content.split("\n").length);

        const lines = content.split("\n");
        lines.forEach((line, i) => {
            const key = line.split("=")[0].trim();
            if (key) {
                console.log(`L${i + 1}: Key found -> ${key}`);
            } else if (line.trim()) {
                console.log(`L${i + 1}: Non-empty line with no "=": ${line.substring(0, 10)}...`);
            }
        });
    } else {
        console.log("❌ .env file NOT found at", envPath);
    }
} catch (e) {
    console.error("❌ Error reading file:", e);
}
