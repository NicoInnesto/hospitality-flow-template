# Hospitality Flow Template

Template statico e riutilizzabile per bar e ristoranti, costruito con Astro, React, TypeScript e Motion.

I font DM Sans e Fraunces sono inclusi localmente tramite Fontsource: il browser non dipende da Google Fonts.

## Struttura

- La home è l’unica pagina con un’isola React e un’esperienza scroll-linked.
- Menu, locale e contatti sono pagine Astro statiche.
- Dati generali, capitoli e menu sono separati dal layout per rendere rapido l’adattamento a un nuovo cliente.
- In assenza di JavaScript o con `prefers-reduced-motion`, la home rimane una normale pagina verticale.

## Avvio

```sh
npm install
npm run dev
```

## Contenuti da sostituire prima della pubblicazione

- dati presenti in `src/config/site.ts`;
- capitoli in `src/data/chapters.ts`;
- menu in `src/data/menu.ts`;
- fotografie in `public/images/`;
- `noindex, nofollow` nel layout;
- dati strutturati e metadati sociali.

## Immagini della bozza

Le fotografie sono segnaposto provenienti da Unsplash e non raffigurano il locale. Prima della vendita andranno sostituite con fotografie approvate dal cliente e accompagnate dalla documentazione delle relative licenze.

Sorgenti dei segnaposto:

- [Colazione](https://unsplash.com/photos/1731696644139-80c466c6aac9)
- [Interno](https://unsplash.com/photos/1659619227903-c467b3fa718b)
- [Aperitivo](https://unsplash.com/photos/1607687332053-ef831d0775ad)
