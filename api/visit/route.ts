import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { visits } from "@/db/schema";
import { sql } from "drizzle-orm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getIp(req: NextRequest) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();
  return "0.0.0.0";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getIp(req);
    const body = await req.json().catch(() => ({}));

    await db.insert(visits).values({
      ip,
      deviceType: body.deviceType,
      deviceBrand: body.deviceBrand,
      deviceModel: body.deviceModel,
      os: body.os,
      browser: body.browser,
      screenW: body.screenW,
      screenH: body.screenH,
    });

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(visits);

    return NextResponse.json({ ok: true, count });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const [{ count }] = await db
    .select({ count: sql<number>`count(*)` })
    .from(visits);
  return NextResponse.json({ count });
}
