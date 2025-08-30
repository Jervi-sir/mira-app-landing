import Image from "next/image";
import React from "react";

type DiscoverySectionProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  imageSrc = "dinosaur.webp", // replace with your asset
  imageAlt = "Happy pets and their humans",
}) => {
  const features = [
    {
      title: "Instant adoption & listings",
      desc:
        "Find the right companion from up-to-date adoption and listing posts.",
    },
    {
      title: "Trusted pet care",
      desc:
        "Book boarding, grooming, and vet services from verified providers.",
    },
    {
      title: "Shop pet essentials",
      desc:
        "Browse daily essentials and accessories for your pet at fair prices.",
    },
    {
      title: "Lost & found alerts",
      desc:
        "Report or spot pets and help reunite families in your area.",
    },
  ];

  return (
    <section id="discover" className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-stone-300">
          Discover, connect & adopt
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Media */}
          <div className="relative aspect-[4/2] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Feature list */}
          <ul className="space-y-6 text-white/80">
            {features.map((f) => (
              <li key={f.title} className="group">
                <p className="flex items-center gap-2 text-lg md:text-xl font-medium text-stone-200">
                  {f.title}
                </p>
                <p className="mt-1 text-sm md:text-base leading-relaxed">
                  {f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
