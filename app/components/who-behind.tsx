import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';

export const WhoBehindSection = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center ">
          <h3 className="text-3xl md:text-4xl font-bold">Who’s Behind Mira app</h3>
          <p className="mt-3 max-w-2xl text-white/70">
            Passionate pet‑lover dedicated to helping owners and those aspiring to become one. Join Mira, where we celebrate the love for pets and provide valuable assistance on your pet journey.
          </p>

          <div className="mt-10 grid max-w-xl items-center justify-center gap-4">
            <Card className=" bg-black text-white backdrop-blur">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <div className="grid size-12 place-items-center rounded-full bg-white/20 text-2xl">🐱</div>
                <div>
                  <CardTitle>GACEM BEKHIRA</CardTitle>
                  <CardDescription className="text-white/70">Founder & Developer</CardDescription>
                </div>
              </CardHeader>
            </Card>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-white/80">
              <a className="inline-flex items-center gap-2" href="https://www.instagram.com/gacem_humen/?hl=en" aria-label="Instagram"><Instagram className="size-5" /> Instagram</a>
              <a className="inline-flex items-center gap-2" href="#" aria-label="LinkedIn"><Linkedin className="size-5" /> LinkedIn</a>
              <a className="inline-flex items-center gap-2" href="tel:+213" aria-label="Phone"><Phone className="size-5" /> Call</a>
              <a className="inline-flex items-center gap-2" href="mailto:hello@mira.app" aria-label="Email"><Mail className="size-5" /> hello@mira.app</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};