export type EbookStatus = "available" | "coming-soon";

export type Ebook = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  category: "Digitale Sicherheit" | "Vorsorge" | "KI und Selbstständigkeit";
  targetAudience: string[];
  benefits: string[];
  chapters: { title: string; description: string }[];
  coverImage: string;
  previewImages?: string[];
  amazonUrl: string;
  status: EbookStatus;
  featured: boolean;
  publishedAt?: string;
  updatedAt?: string;
};

const common = {
  amazonUrl: "[AMAZON-AFFILIATE-LINK]",
  status: "coming-soon" as const,
};

export const ebooks: Ebook[] = [
  {
    ...common, slug: "die-stimme-am-telefon", title: "Die Stimme am Telefon ist nicht dein Kind", subtitle: "Schutz vor KI-Betrug, Voice-Cloning und Schockanrufen", category: "Digitale Sicherheit", featured: true, coverImage: "/images/ebooks/stimme.svg",
    shortDescription: "Ein praktischer Familienratgeber über gefälschte Stimmen, manipulierte Identitäten und das richtige Verhalten bei verdächtigen Anrufen.",
    longDescription: "Eine vertraute Stimme, eine dramatische Geschichte und die Forderung, sofort zu handeln: Moderne Betrugsversuche nutzen künstliche Intelligenz, persönliche Daten und psychologischen Druck. Dieser Ratgeber erklärt verständlich, wie solche Angriffe funktionieren und wie Familien einen einfachen Sicherheitsplan entwickeln.",
    targetAudience: ["Familien und Angehörige", "Menschen, die sich vor Telefonbetrug schützen möchten", "Alle, die klare Reaktionsschritte suchen"],
    benefits: ["typische KI-Betrugsmaschen frühzeitig erkennen", "bei verdächtigen Anrufen richtig reagieren", "ein sicheres Familien-Codewort einrichten", "persönliche Informationen besser schützen", "im Betrugsfall Beweise sichern und schnell handeln"],
    chapters: [{ title: "Warum Stimmen täuschen können", description: "Wie Voice-Cloning funktioniert – ohne Technikjargon." }, { title: "Druck erkennen", description: "Die wichtigsten Warnsignale bei Schockanrufen." }, { title: "Der Familienplan", description: "Codewort, Rückruf und ruhige nächste Schritte." }, { title: "Wenn etwas passiert", description: "Beweise sichern und die richtigen Stellen informieren." }],
  },
  {
    ...common, slug: "sicher-daten-ab-50", title: "Sicher daten ab 50", subtitle: "Romance-Scams, falsche Identitäten und emotionale Manipulation erkennen", category: "Digitale Sicherheit", featured: false, coverImage: "/images/ebooks/daten.svg",
    shortDescription: "Dieser Ratgeber zeigt, wie Betrüger Vertrauen aufbauen, Warnsignale verschleiern und ihre Opfer zu Geldzahlungen drängen.", longDescription: "Online-Kontakte können bereichernd sein. Dieser Ratgeber hilft dabei, Nähe und Skepsis in ein gutes Gleichgewicht zu bringen und typische Muster von Romance-Scams rechtzeitig zu erkennen.", targetAudience: ["Menschen ab 50", "Familie und Freundeskreis", "Nutzerinnen und Nutzer von Dating-Plattformen"], benefits: ["falsche Profile erkennen", "emotionale Manipulation einordnen", "Geldforderungen sicher abweisen", "Vertrauen bewusst prüfen"], chapters: [{ title: "So entsteht falsches Vertrauen", description: "Die typischen Etappen eines Romance-Scams." }, { title: "Warnzeichen", description: "Was sich hinter besonders glaubwürdigen Geschichten verbirgt." }, { title: "Sicher reagieren", description: "Gespräche beenden und Hilfe einbeziehen." }],
  },
  {
    ...common, slug: "kinder-ki-und-smartphone", title: "Kinder, KI und Smartphone", subtitle: "Der praktische Familienratgeber für ChatGPT, Social Media und gesunde Bildschirmregeln", category: "Digitale Sicherheit", featured: false, coverImage: "/images/ebooks/kinder.svg",
    shortDescription: "Klare Orientierung für Eltern, die ihre Kinder schützen möchten, ohne moderne Technik grundsätzlich zu verteufeln.", longDescription: "Zwischen Chancen, Chats und endlosen Feeds braucht es keine pauschalen Verbote, sondern nachvollziehbare Regeln. Dieser Ratgeber hilft Familien, Gespräche und Grenzen praktisch zu gestalten.", targetAudience: ["Eltern und Erziehungsberechtigte", "Familien mit Schulkindern", "Menschen, die Medienkompetenz vermitteln"], benefits: ["Gespräche über KI anfangen", "altersgerechte Regeln entwickeln", "Privatsphäre schützen", "gemeinsame Bildschirmzeiten planen"], chapters: [{ title: "KI im Familienalltag", description: "Was Kinder wirklich über neue Werkzeuge wissen sollten." }, { title: "Klare Regeln", description: "Grenzen, die im Alltag funktionieren." }, { title: "Im Gespräch bleiben", description: "Wie Vertrauen auch online wächst." }],
  },
  {
    ...common, slug: "digitaler-nachlass-ohne-chaos", title: "Digitaler Nachlass ohne Chaos", subtitle: "Konten, Passwörter, Verträge und wichtige Unterlagen rechtzeitig ordnen", category: "Vorsorge", featured: false, coverImage: "/images/ebooks/nachlass.svg",
    shortDescription: "Ein Schritt-für-Schritt-Ratgeber für alle, die ihren Angehörigen später keine digitale Schnitzeljagd hinterlassen möchten.", longDescription: "Passwörter, Verträge und Online-Konten gehören heute zur persönlichen Vorsorge. Dieser Ratgeber macht aus der Aufgabe einen überschaubaren Plan mit klaren Listen und Entscheidungen.", targetAudience: ["Menschen, die ihre Unterlagen ordnen möchten", "Angehörige", "Alle, die vorausschauend vorsorgen"], benefits: ["Konten strukturiert erfassen", "Unterlagen sinnvoll ablegen", "Zugänge vorbereitet dokumentieren", "Angehörige entlasten"], chapters: [{ title: "Bestandsaufnahme", description: "Welche digitalen Spuren wirklich wichtig sind." }, { title: "Ordnung schaffen", description: "Ein praktikables System für Konten und Unterlagen." }, { title: "Übergabe vorbereiten", description: "Was Vertrauenspersonen wissen sollten." }],
  },
  {
    ...common, slug: "allein-aelter-werden", title: "Allein älter werden", subtitle: "Selbstbestimmt vorsorgen, auch ohne Partner oder Kinder", category: "Vorsorge", featured: false, coverImage: "/images/ebooks/aelter.svg",
    shortDescription: "Ein praktischer Leitfaden für persönliche Vorsorge, Unterstützungsnetzwerke, Wohnformen und wichtige Entscheidungen.", longDescription: "Selbstbestimmung beginnt lange vor einem Notfall. Dieser Leitfaden ordnet wichtige Fragen rund um Vorsorge, Wohnformen und ein tragfähiges persönliches Netzwerk.", targetAudience: ["Menschen ohne Partner oder Kinder", "Menschen in der Lebensplanung", "Vertrauenspersonen"], benefits: ["eigene Wünsche festhalten", "Unterstützung planen", "Wohnformen vergleichen", "wichtige Entscheidungen vorbereiten"], chapters: [{ title: "Die eigene Ausgangslage", description: "Wünsche, Werte und offene Fragen sortieren." }, { title: "Netzwerke", description: "Verlässliche Unterstützung aufbauen." }, { title: "Vorsorge im Alltag", description: "Schritt für Schritt handlungsfähig bleiben." }],
  },
  {
    ...common, slug: "ki-statt-papierchaos", title: "KI statt Papierchaos", subtitle: "Praktische künstliche Intelligenz für Handwerk und kleine Betriebe", category: "KI und Selbstständigkeit", featured: false, coverImage: "/images/ebooks/papierchaos.svg",
    shortDescription: "Konkrete Arbeitsabläufe für Angebote, Kundenkommunikation, Büroorganisation und Marketing, verständlich erklärt und direkt einsetzbar.", longDescription: "Künstliche Intelligenz muss nicht kompliziert sein. Dieses E-Book zeigt kleine, sichere Schritte, mit denen Handwerksbetriebe und Selbstständige wieder Zeit für ihre eigentliche Arbeit schaffen.", targetAudience: ["Handwerksbetriebe", "kleine Unternehmen", "Solo-Selbstständige"], benefits: ["Angebote vorbereiten", "Kundenkommunikation entlasten", "Abläufe dokumentieren", "KI verantwortungsvoll einsetzen"], chapters: [{ title: "Gute Aufgaben auswählen", description: "Wo KI sinnvoll unterstützt – und wo nicht." }, { title: "Praktische Vorlagen", description: "Prompts für den Büroalltag." }, { title: "Sicher arbeiten", description: "Daten und Qualität im Blick behalten." }],
  },
  {
    ...common, slug: "faceless-aber-nicht-unsichtbar", title: "Faceless, aber nicht unsichtbar", subtitle: "Reichweite und digitale Produkte aufbauen, ohne selbst vor der Kamera zu stehen", category: "KI und Selbstständigkeit", featured: false, coverImage: "/images/ebooks/faceless.svg",
    shortDescription: "Ein strukturierter Leitfaden für Content Creator, die anonym oder ohne persönliche Selbstdarstellung eine starke Marke aufbauen möchten.", longDescription: "Sichtbarkeit braucht kein Gesicht vor der Kamera. Der Ratgeber zeigt, wie sich ein klares Themenprofil, nützliche Inhalte und digitale Produkte aufbauen lassen, ohne sich zu verbiegen.", targetAudience: ["Content Creator", "Menschen mit Wunsch nach Anonymität", "Digitale Selbstständige"], benefits: ["eine erkennbare Positionierung entwickeln", "Content ohne Kamera planen", "Produktideen strukturieren", "Vertrauen über Qualität aufbauen"], chapters: [{ title: "Profil statt Person", description: "Eine Marke mit klarer Haltung entwickeln." }, { title: "Inhalte planen", description: "Formate, die ohne Kamera funktionieren." }, { title: "Sichtbar bleiben", description: "Reichweite verantwortungsvoll aufbauen." }],
  },
];

export const categories = ["Digitale Sicherheit", "Vorsorge", "KI und Selbstständigkeit"] as const;
export const getEbook = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);
