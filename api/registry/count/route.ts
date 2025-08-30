import { NextResponse } from "next/server";
import { db } from "@/db";
import { registry } from "@/db/schema";
import { sql } from "drizzle-orm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(registry);

    return NextResponse.json({ count: count + 100 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}