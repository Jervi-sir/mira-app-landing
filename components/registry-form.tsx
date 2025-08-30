'use client'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Search, ShieldCheck, Star } from 'lucide-react';
import React, { useState } from 'react';

export const RegistryFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    wilaya: "",
    city: "",
    role: "person" as
      | "person"
      | "vet"
      | "groomer"
      | "shelter"
      | "store"
      | "breeder"
      | "trainer"
      | "sitter",
    notes: "",
  });


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/registry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }
      setForm({ email: "", phone: "", wilaya: "", city: "", role: "person", notes: "" });
      // swap with a toast if you have one
      alert("Thanks! We'll notify you at " + form.email);
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section id="waitlist" className="bg-muted/40">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Why people love Mira</h3>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 size-5" /> Trust by design: verified accounts, business claim workflow, transparent info.</li>
                <li className="flex items-start gap-3"><Star className="mt-0.5 size-5" /> 10,000+ pet lovers already on board (and growing).</li>
                <li className="flex items-start gap-3"><Search className="mt-0.5 size-5" /> Fast filters & clean UI: find the right pet or service in seconds.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Wilaya-aware search</Badge>
                <Badge variant="secondary">FR / EN / AR labels</Badge>
                <Badge variant="secondary">Lightweight on any network</Badge>
              </div>
            </div>
            {/* Registry Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Join the waitlist</CardTitle>
                <CardDescription>
                  Get early access and updates. Email is required, phone is optional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="e.g. +213 5x xx xx xx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="wilaya">Wilaya</Label>
                      <Input
                        id="wilaya"
                        placeholder="e.g. Algiers"
                        value={form.wilaya}
                        onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="e.g. Hydra"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Join as</Label>
                    <Select
                      value={form.role}
                      onValueChange={(v: typeof form.role) => setForm({ ...form, role: v })}
                    >
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Choose your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="person">Person</SelectItem>
                        <SelectItem value="vet">Vet clinic</SelectItem>
                        <SelectItem value="groomer">Groomer</SelectItem>
                        <SelectItem value="shelter">Shelter</SelectItem>
                        <SelectItem value="store">Pet store</SelectItem>
                        <SelectItem value="breeder">Breeder</SelectItem>
                        <SelectItem value="trainer">Trainer</SelectItem>
                        <SelectItem value="sitter">Pet sitter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Anything you'd like to add"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="min-h-[92px]"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? "Submitting…" : "Join waitlist"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};