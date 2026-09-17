export const site = {
  name: "Bar Mascagni",
  signature: "Panta Rei",
  claim: "Tutto scorre, dall’alba a notte fonda.",
  description:
    "Una giornata al Bar Mascagni Panta Rei di Modena: colazione, pausa salata, aperitivo e serate da vivere insieme.",
  phoneLabel: "348 809 5406",
  phoneHref: "+393488095406",
  address: "Via Emilia Est 93, Modena",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Bar+Mascagni+Via+Emilia+Est+93+Modena",
  hours: [
    { days: "Lunedì — Giovedì", value: "05:00 — 01:00" },
    { days: "Venerdì — Domenica", value: "05:30 — 02:00" },
  ],
  notice: "Contenuti e orari dimostrativi: da confermare con il locale.",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locale", label: "Il locale" },
  { href: "/contatti", label: "Contatti" },
] as const;
