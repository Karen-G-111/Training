import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST() {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      login TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

    try {
        await pool.query(sql);
        return NextResponse.json({ ok: true });
    } catch (error: any) {
        return NextResponse.json(
            { ok: false, error: error?.message ?? "Unknown error" },
            { status: 500 }
        );
    }
}
