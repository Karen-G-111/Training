import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";

export async function POST() {
    console.log("We are in Right Place");

    try {
        await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        login TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        return NextResponse.json({});
    } catch (error: unknown) {
        console.error("create-users-table error:", error);

        const message = error instanceof Error ? error.message : String(error);

        return NextResponse.json(
            { ok: false, error: message },
            { status: 500 }
        );
    }
}
