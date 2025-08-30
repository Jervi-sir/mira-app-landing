import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const CTASection = () => {
  return (
    <>
      <section className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Local‑first, Algeria‑ready</h3>
              <p className="mt-2 text-muted-foreground">Wilaya‑aware search (FR/EN/AR labels), distance sorting, and lightweight performance on any network.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Link href={'#waitlist'}>
                <Button><UploadCloud className="mr-2 size-4" /> Claim your business</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};