// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://mira-pet-app.vercel.app"; // <-- change

  // Static routes you want indexed
  const staticRoutes = [""].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: p === "" ? 1 : 0.8,
    })
  );

  // Example for dynamic routes (plug your data source here)
  // const res = await fetch(`${base}/api/seo/listings`, { next: { revalidate: 3600 } });
  // const items: { slug: string; updatedAt: string }[] = await res.json();
  // const dynamicRoutes = items.map((i) => ({
  //   url: `${base}/listing/${i.slug}`,
  //   lastModified: i.updatedAt,
  //   changeFrequency: "daily",
  //   priority: 0.7,
  // }));

  // @ts-ignore
  return [...staticRoutes /*, ...dynamicRoutes*/];
}
