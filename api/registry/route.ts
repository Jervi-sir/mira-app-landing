import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { registry } from "@/db/schema";
import { z } from "zod";

export const runtime = "nodejs"; // better-sqlite3 requires Node runtime
export const dynamic = "force-dynamic"; // avoid caching writes


const BodySchema = z.object({
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  wilaya: z.string().max(80).optional().or(z.literal("")),
  city: z.string().max(80).optional().or(z.literal("")),
  role: z.enum([
    "person",
    "vet",
    "groomer",
    "shelter",
    "store",
    "breeder",
    "trainer",
    "sitter",
  ]),
  notes: z.string().max(1000).optional().or(z.literal("")),
});


export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || null;
    const userAgent = req.headers.get("user-agent") || null;
    await db.insert(registry).values({ ...parsed.data, ip, userAgent });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
