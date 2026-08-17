"use client";

import { useState } from "react";

const navigation = [
  ["Home", "#home"],
  ["Agenda", "#agenda"],
  ["Speakers", "#speakers"],
  ["Moderators", "#moderators"],
  ["Committee", "#committee"],
] as const;

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="exact-hero" id="home">
      <header className="overlay-nav">
        <img src="/media/conference-logo.png" alt="Conference logo" />
        <button onClick={() => setOpen((current) => !current)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
        <nav className={open ? "nav-open" : ""}>
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </header>
      <div className="hero-title">
        <div className="event-symbol"><span /><span /></div>
        <div><small>2<sup>ND</sup> INTERNATIONAL</small><h1>HEMATOLOGY &amp;<br />HEMOSTASIS</h1><b>CONFERENCE</b></div>
      </div>
      <div className="hero-facts">
        <div><i>▣</i><span>DATE<b>3–5 MAY 2026</b></span></div>
        <div><i>◷</i><span>TIME<b>7:30 – 17:00</b></span></div>
        <div><i>⌖</i><span>LOCATION<b>LE MERIDIEN AL KHOBAR</b></span></div>
      </div>
    </section>
  );
}
