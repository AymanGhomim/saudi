import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow" aria-hidden="true" />
      <Link className="not-found-logo" href="/" aria-label="Back to conference home">
        <Image src="/media/conference-logo.png" width={300} height={88} alt="International Hematology and Hemostasis Conference" priority />
      </Link>

      <section className="not-found-card">
        <div className="not-found-pattern" aria-hidden="true">
          {Array.from({ length: 35 }, (_, index) => <i key={index}>+</i>)}
        </div>
        <p className="not-found-kicker">PAGE NOT FOUND</p>
        <strong className="not-found-code">404</strong>
        <h1>This page is outside the program.</h1>
        <p className="not-found-copy">The page may have moved or the address may be incorrect. Return to the conference website to continue exploring the event.</p>
        <div className="not-found-actions">
          <Link href="/">Back to Home</Link>
          <a href="https://wa.me/966567570929">Contact Us</a>
        </div>
      </section>

      <p className="not-found-event">3–5 May 2026 · Le Méridien Al Khobar</p>
    </main>
  );
}
