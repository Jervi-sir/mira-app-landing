import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, PawPrint, Search } from 'lucide-react';
import React from 'react';

export const CanDoSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-12 md:py-20">
        <header className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">What you can do with Mira</h3>
          <p className="mt-2 text-muted-foreground">
            Fast filters & clean UI: get to the right pet or service in seconds.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Search className="size-5" />}
            title="Browse & post listings"
            description="Adoption, sale, mating, or rental — with rich media (galleries, zoom, even pet audio). Filter by wilaya, city, species, breed, gender, age, price, and distance."
          />
          <FeatureCard
            icon={<MapPin className="size-5" />}
            title="Lost & Found that actually works"
            description="Create fast reports with last-seen wilaya/city, time, and notes; explore a map + list to spot sightings, and share instantly."
          />
          <FeatureCard
            icon={<PawPrint className="size-5" />}
            title="Find nearby services"
            description="Vets, groomers, shelters, and stores — clean profiles with hours, call/WhatsApp, directions, and (soon) reviews."
          />
        </div>
      </section>
    </>
  );
};

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}