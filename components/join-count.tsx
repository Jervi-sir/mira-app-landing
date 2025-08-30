"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function JoinCountSection({ pollMs = 30000 }: { pollMs?: number }) {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const res = await fetch("/api/registry/count", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load count");
      const data = await res.json();
      setCount(Number(data?.count ?? 0));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCount();
    const id = setInterval(fetchCount, pollMs);
    const handler = () => fetchCount();
    window.addEventListener("registry:updated", handler);
    return () => {
      clearInterval(id);
      window.removeEventListener("registry:updated", handler);
    };
  }, [pollMs]);

  const display = useMemo(() =>
    count === null ? "—" : count.toLocaleString(undefined, { maximumFractionDigits: 0 }),
  [count]);

  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Card className="text-center bg-black border-stone-600">
          <CardHeader>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="gap-2"><Users className="size-4"/> Live</Badge>
              <span className="text-sm text-muted-foreground">Updated automatically</span>
            </div>
            <CardTitle className="mt-2 text-2xl md:text-3xl text-stone-400">People who joined</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-6xl md:text-7xl font-extrabold tabular-nums leading-none text-stone-600">
              {display}
            </div>
            <p className="mt-2 text-stone-400 ">and counting…</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
