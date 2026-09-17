export type Chapter = {
  id: string;
  hour: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  accent: string;
  background: string;
};

export const chapters: Chapter[] = [
  {
    id: "alba",
    hour: "05:00",
    eyebrow: "La luce è già accesa",
    title: "La giornata comincia prima della città.",
    body: "Un caffè al banco, due parole e la Via Emilia che lentamente si rimette in moto.",
    image: "/images/colazione.jpg",
    imageAlt: "Espresso e cornetto serviti nelle prime ore del mattino",
    accent: "#ffc27a",
    background: "#081728",
  },
  {
    id: "colazione",
    hour: "07:00",
    eyebrow: "Colazione",
    title: "Il profumo che fa cambiare passo.",
    body: "Espresso, cappuccino e brioche: il rito semplice con cui iniziare bene, seduti o da portare via.",
    image: "/images/colazione.jpg",
    imageAlt: "Espresso e cornetto su un bancone di legno",
    accent: "#ffd6a4",
    background: "#512619",
  },
  {
    id: "pausa",
    hour: "12:30",
    eyebrow: "Pausa salata",
    title: "Pochi minuti, qualcosa di buono.",
    body: "Tramezzini, erbazzone e proposte veloci per una pausa senza formalità.",
    image: "/images/colazione.jpg",
    imageAlt: "Dettaglio di una colazione servita al banco",
    accent: "#143d46",
    background: "#bdd2d1",
  },
  {
    id: "locale",
    hour: "16:00",
    eyebrow: "Il locale",
    title: "Piccolo, raccolto, pieno di storie.",
    body: "Oggetti, fotografie e piante compongono un posto fuori dal tempo, dove ci si riconosce in fretta.",
    image: "/images/locale.jpg",
    imageAlt: "Interno raccolto con cornici e luce calda",
    accent: "#e8d38b",
    background: "#1a2e24",
  },
  {
    id: "aperitivo",
    hour: "19:00",
    eyebrow: "Aperitivo",
    title: "Il giorno rallenta, i bicchieri si incontrano.",
    body: "Spritz, cocktail e qualcosa da condividere: il momento in cui fermarsi diventa il programma.",
    image: "/images/aperitivo.jpg",
    imageAlt: "Calice di spritz in un bar dalla luce calda",
    accent: "#ffb265",
    background: "#6b2414",
  },
  {
    id: "notte",
    hour: "22:30",
    eyebrow: "La sera",
    title: "Quando parte una canzone, il locale cambia voce.",
    body: "Musica, karaoke e serate da confermare: qui la notte resta vicina e informale.",
    image: "/images/aperitivo.jpg",
    imageAlt: "Luci soffuse e bicchiere da aperitivo",
    accent: "#ff93cf",
    background: "#21103d",
  },
  {
    id: "ritorno",
    hour: "01:30",
    eyebrow: "Panta Rei",
    title: "La porta si chiude. Domani tutto ricomincia.",
    body: "Dalla prima tazzina all’ultimo saluto: una giornata intera, nello stesso posto.",
    image: "/images/locale.jpg",
    imageAlt: "Dettaglio di un interno raccolto nella luce della sera",
    accent: "#9edce7",
    background: "#07131e",
  },
];
