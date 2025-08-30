import type { Metadata } from "next";
import { Bowlby_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mira – Pets, Adoption, Vets & Groomers in Algeria | Android & iOS",
  description: "Mira is Algeria’s #1 pet platform. Adopt, buy, sell, or find pets. Lost & found, vets, groomers, shelters. Available in all wilayas. Join now for Android & iOS.",
  keywords: [
    "Pet adoption Algeria",
    "Pets for sale Algeria",
    "Lost pets Algeria",
    "Mating services Algeria",
    "Dog adoption Algiers",
    "Cat adoption Oran",
    "Vet clinics Algeria",
    "Pet groomers Algeria",
    "Animal shelters Algeria",
    "Mira app Android iOS"
  ],
  openGraph: {
    title: "Mira – Algeria’s Pet Community",
    description: "Adopt, sell, or find pets. Lost & found, vets, groomers, shelters in Algeria.",
    url: "https://mira-pet-app.com",
    siteName: "Mira",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_DZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira – Pets, Adoption & Services in Algeria",
    description: "Adopt, sell, rehome pets. Connect with vets & groomers. Available in all wilayas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mira-pet-app.com",
    languages: {
      "en-DZ": "https://mira-pet-app.com/en",
      "fr-DZ": "https://mira-pet-app.com/fr",
      "ar-DZ": "https://mira-pet-app.com/ar",
      "kab-DZ": "https://mira-pet-app.com/dz", // if you ever support Darija/Kabyle
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
