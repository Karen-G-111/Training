// src/lib/db.ts
import "server-only";
import postgres from "postgres";

const DATABASE_URL = process.env.POSTGRES_URL;

if (!DATABASE_URL) {
    throw new Error("POSTGRES_URL not set");
}

// sql — это функция для выполнения запросов
export const sql = postgres(DATABASE_URL, {
    ssl: "require",
});
