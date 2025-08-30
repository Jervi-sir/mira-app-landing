'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { CalendarClock, PawPrint, UploadCloud } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Helper: format remaining time to Launch (20 September 2025, 00:00 Africa/Algiers)
function useCountdown(targetISO = "2025-09-20T00:00:00+01:00") {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1_000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-[420px] rounded-full blur-3xl bg-primary/10" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 gap-2 text-sm"><PawPrint className="size-4" /> Mira</Badge>
            <h2 className="text-3xl md:text-5xl/tight font-bold">
              pets, people, and services in one place
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Adopt, rehome, report lost & found, and book trusted pet services around you. Built for everyday pet owners and clinics, groomers, shelters, and shops.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Coming soon on Android & iOS</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="inline-flex items-center gap-1"><CalendarClock className="size-4" /> Launch date: 20 September 2025</span>
            </div>

            {/* Countdown */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border p-3 md:p-4">
              <TimePill label="Days" value={days} />
              <Separator orientation="vertical" className="h-8" />
              <TimePill label="Hours" value={hours} />
              <Separator orientation="vertical" className="h-8" />
              <TimePill label="Minutes" value={minutes} />
              <Separator orientation="vertical" className="h-8" />
              <TimePill label="Seconds" value={seconds} />
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <Link href={'#waitlist'}>
                <Button size="lg">Be the first</Button>
              </Link>
              <Link href={'#tiktok'}>
                <Button size="lg" variant="outline">Learn more</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};


function TimePill({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid place-items-center rounded-xl bg-muted px-4 py-2">
      <div className="text-2xl font-bold tabular-nums leading-none">{value.toString().padStart(2, "0")}</div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}