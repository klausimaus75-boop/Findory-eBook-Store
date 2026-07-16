export const siteConfig = {
  name: "Findory-E-Book-Store",
  shortName: "Findory",
  description:
    "Praktische E-Books über digitale Sicherheit, persönliche Vorsorge und moderne Selbstständigkeit.",
  domain: "[DOMAIN]",
  email: "[E-MAIL-ADRESSE]",
  author: "[AUTORENNAME ODER PSEUDONYM]",
  amazonPartnerDisclosure: "Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.",
};

// Die Platzhalterdomain bleibt in der Konfiguration sichtbar; für gültige lokale Metadaten
// wird bis zum Go-live eine neutrale Beispieldomain verwendet.
export const canonicalUrl = (path = "/") => `https://${siteConfig.domain === "[DOMAIN]" ? "findory.example" : siteConfig.domain}${path}`;
