import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";


export const registry = sqliteTable("registry", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  phone: text("phone"),
  wilaya: text("wilaya"),
  city: text("city"),
  role: text("role", {
    enum: [
      "person",
      "vet",
      "groomer",
      "shelter",
      "store",
      "breeder",
      "trainer",
      "sitter",
    ],
  })
    .notNull()
    .default("person"),
  notes: text("notes"),
  ip: text("ip"),
  userAgent: text("user_agent"),
  // store creation time as ISO text; simplest for SQLite
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const visits = sqliteTable("visits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  ip: text("ip").notNull(),
  deviceType: text("device_type"), // "mobile" | "tablet" | "desktop" | "bot" | null
  deviceBrand: text("device_brand"),
  deviceModel: text("device_model"),
  os: text("os"), // e.g. "iOS 17.6"
  browser: text("browser"), // e.g. "Chrome 126"

  screenW: integer("screen_w"),
  screenH: integer("screen_h"),

  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});