/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mira-pet-app.com", // your production domain
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*"],

  // Static + dynamic entries
  additionalPaths: async (config) => {
    const wilayas = [
      "algiers", "oran", "ain temouchent", "constantine", "annaba", "blida",
      "batna", "bejaia", "tlemcen", "setif", "tipaza",
      "mostaganem", "skikda", "ghardaia", "tizi-ouzou",
      "el-oued", "djelfa", "sidi-bel-abbes", "saida",
      "boumerdes", "relizane", "tiaret", "laghouat",
      "khenchela", "biskra", "bechar", "naama",
      "adrar", "illizi", "tamanrasset", "ouargla"
      // 👉 add all 58 wilayas here
    ];

    // Generate adoption + services pages per wilaya
    return wilayas.flatMap((w) => ([
      { loc: `?wilaya=${w}`, changefreq: "daily", priority: 0.9 },
      { loc: `#waitlist?wilaya=${w}`, changefreq: "daily", priority: 0.9 },
    ]));
  },
};
