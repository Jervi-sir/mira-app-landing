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

  // AR → FR → EN in one string (as requested)
  description:
    "ميرا هي المنصة المرجعية للحيوانات الأليفة في الجزائر: تبنّي، بيع وشراء، ضائع/مفقود، أطباء بيطريون، تواليتور وملاجئ. متاحة في جميع الولايات. Mira, la plateforme incontournable en Algérie pour les animaux de compagnie : adoption, vente/achat, perdus/trouvés, vétérinaires, toiletteurs, refuges. Disponible dans toutes les wilayas. Mira is the go-to pet platform in Algeria: adopt, buy, sell, or find pets; lost & found, vets, groomers, shelters — available across all wilayas.",

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
    // short tri-lingual OG description to keep previews clean
    description:
      "ميرا: تبنّي/بيع/مفقود + بياطرة/تواليتور | Mira: adoption/vente/perdus + vétérinaires/toiletteurs | Mira: adopt/buy/lost + vets/groomers.",
    url: "https://mira-pet-app.com",
    siteName: "Mira",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_DZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mira – Pets, Adoption & Services in Algeria",
    description:
      "AR/FR/EN: تبنّي/vente/adopt • ضائع/perdus/lost • بياطرة/vets/toiletteurs.",
    images: ["/og-image.png"],
  },

  // keep canonical, drop hreflang alternates since there are no /en /fr /ar pages
  alternates: {
    canonical: "https://mira-pet-app.com"
  },
  verification: {
    google: "PASTE_THE_TOKEN_FROM_SEARCH_CONSOLE", // 👈
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
