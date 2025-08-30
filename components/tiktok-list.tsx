"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, ChevronLeft, ChevronRight } from "lucide-react";

export type TikTokVideo = {
  id?: string;            // 19-digit video id
  url?: string;           // https://www.tiktok.com/@user/video/123...
  caption?: string;
};

function extractTikTokId(input?: string): string | null {
  if (!input) return null;
  const m = input.match(/video\/(\d{10,22})/);
  return m?.[1] ?? null;
}

export default function TikTokReelsSection() {
  const profileUrl = "https://www.tiktok.com/@what_jervi_thinks_of_dz";
  const title = "Mira on TikTok.";
  const blurb = "Short reels about adoptions, grooming tips, and lost & found wins.";
  const videos: TikTokVideo[] = [
    { url: "https://www.tiktok.com/@what_jervi_thinks_of_dz/video/7542326816418172191", caption: "" },
    // add more here…
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  // Center the scroller on mount (to roughly the middle of all items)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Wait a tick for layout to settle
    const id = requestAnimationFrame(() => {
      const target = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollLeft = Math.max(0, target);
    });
    return () => cancelAnimationFrame(id);
  }, [videos.length]);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // scroll by one card (~320px) + gap
    const delta = (dir === "left" ? -1 : 1) * 360;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="tiktok" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <Badge className="gap-2"><Video className="size-4" /> TikTok</Badge>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{blurb}</p>

          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
                <Video className="mr-2 size-4" /> Follow @mira
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-10">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          {/* Optional arrows */}
          <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10">
            <Button size="icon" variant="ghost" aria-label="Scroll left" onClick={() => scrollByAmount("left")}>
              <ChevronLeft className="size-5" />
            </Button>
          </div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 z-10">
            <Button size="icon" variant="ghost" aria-label="Scroll right" onClick={() => scrollByAmount("right")}>
              <ChevronRight className="size-5" />
            </Button>
          </div>

          {/* Horizontal scroller */}
          <div
            ref={scrollRef}
            className="
              group flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-1
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            aria-label="TikTok video list"
          >
            {videos.map((v, idx) => {
              const id = v.id ?? extractTikTokId(v.url);
              if (!id) return null;
              return (
                <Card
                  key={`${id}-${idx}`}
                  className="
                    snap-center shrink-0 overflow-hidden border-none
                    w-[260px] sm:w-[300px] lg:w-[340px]
                  "
                >
                  <div className="relative aspect-[9/18] h-[740px] bg-muted">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={v.caption || `TikTok video ${id}`}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  {v.caption && (
                    <CardContent className="p-3 text-sm text-muted-foreground">
                      {v.caption}
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
