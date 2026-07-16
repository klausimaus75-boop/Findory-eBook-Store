"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const topics = [{ href: "/themen/digitale-sicherheit", label: "Digitale Sicherheit" }, { href: "/themen/vorsorge", label: "Vorsorge" }, { href: "/themen/ki-und-selbststaendigkeit", label: "KI und Selbstständigkeit" }];
export function Header() {
  const [open, setOpen] = useState(false); const [topicOpen, setTopicOpen] = useState(false);
  return <header className="site-header"><div className="shell nav"><Link href="/" className="logo" aria-label={`${siteConfig.name} Startseite`}><strong>{siteConfig.shortName}</strong><span>E-Book-Store</span></Link><nav className="desktop-nav" aria-label="Hauptnavigation"><Link href="/">Startseite</Link><Link href="/ebooks">E-Books</Link><div className="nav-dropdown"><button onClick={() => setTopicOpen(!topicOpen)} aria-expanded={topicOpen}>Themen <span aria-hidden>⌄</span></button>{topicOpen && <div className="dropdown-menu">{topics.map((topic) => <Link key={topic.href} href={topic.href} onClick={() => setTopicOpen(false)}>{topic.label}</Link>)}</div>}</div><Link href="/ratgeber">Ratgeber</Link><Link href="/ueber-uns">Über Findory</Link></nav><Link href="/ebooks" className="button button-primary header-cta">E-Books entdecken</Link><button className="menu-button" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i><i></i></button></div>{open && <nav className="mobile-nav shell" aria-label="Mobile Navigation"><Link href="/" onClick={() => setOpen(false)}>Startseite</Link><Link href="/ebooks" onClick={() => setOpen(false)}>E-Books</Link>{topics.map(t => <Link key={t.href} href={t.href} onClick={() => setOpen(false)}>{t.label}</Link>)}<Link href="/ratgeber" onClick={() => setOpen(false)}>Ratgeber</Link><Link href="/ueber-uns" onClick={() => setOpen(false)}>Über Findory</Link></nav>}</header>;
}
