import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { BellRing, CalendarClock, MessageSquare, Star } from 'lucide-react';
import React from 'react';

export const RoadmapSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-12 md:py-20">
        <header className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Roadmap highlights</h3>
          <p className="mt-2 text-muted-foreground">What we're shipping next</p>
        </header>
        <div className="grid gap-6 md:grid-cols-4">
          <RoadmapCard icon={<MessageSquare className="size-5" />} title="In‑app chat & media" desc="Share photos, audio, and docs in conversation." />
          <RoadmapCard icon={<Star className="size-5" />} title="Ratings & reviews" desc="Service quality you can trust." />
          <RoadmapCard icon={<CalendarClock className="size-5" />} title="Appointment requests" desc="Request and confirm time slots with services." />
          <RoadmapCard icon={<BellRing className="size-5" />} title="Smart alerts" desc="New matches or sightings in your area." />
        </div>
      </section>
    </>
  );
};

function RoadmapCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 inline-flex items-center gap-2 text-primary">{icon}<span className="font-medium">{title}</span></div>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

