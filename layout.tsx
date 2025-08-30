import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Mira is Algeria’s focused pet platform. Adopt, buy, sell, or find pets. Lost & found, vets, groomers, shelters. Available in all wilayas. Join now for Android & iOS. Platform d’adoption des animaux",
  metadataBase: new URL("https://mira-pet-app.com"),
  keywords: [
    // English
    "Pet adoption Algeria", "Pets for sale Algeria", "Lost pets Algeria", "Dog adoption Algiers",
    "Cat adoption Oran", "Vet clinics Algeria", "Pet groomers Algeria", "Animal shelters Algeria",
    "Mating services Algeria", "Mira app Android iOS",

    // French
    "Adoption animaux Algérie", "Chiens à adopter Alger", "Chats à vendre Oran",
    "Clinique vétérinaire Algérie", "Toiletteur pour chiens Alger", "Refuge animaux Algérie",

    // Arabic (MSA)
    "تبني الحيوانات في الجزائر", "كلاب للبيع الجزائر", "قطط للتبني الجزائر",
    "أطباء بيطريون الجزائر", "مراكز إيواء الحيوانات الجزائر", "خدمات تربية الحيوانات الجزائر",

    // Darija
    "تبني الحيوانات فالجزاير", "كلاب للبيع فالجزاير", "قطط للتبني فالجزاير",
    "بياطرة فالجزاير", "تزاوج كلاب فالجزاير", "محلات حيوانات فالجزاير"
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
      "x-dz-DZ": "https://mira-pet-app.com/dz", // 👈 custom hreflang for Darija
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
