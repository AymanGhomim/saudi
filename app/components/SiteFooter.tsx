const footerLinks = [
  ["Home", "#home"],
  ["Agenda", "#agenda"],
  ["Speakers", "#speakers"],
  ["Moderators", "#moderators"],
  ["Committee", "#committee"],
] as const;

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brands">
          <img src="/media/conference-logo.png" alt="International Hematology and Hemostasis Conference" />
          <img className="devspring-logo" src="/media/devspring-logo.png" alt="Devspring" />
        </div>
        <nav className="footer-sections" aria-label="Footer navigation">
          <h4>Sections</h4>
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="footer-connect">
          <h4>Follow Us</h4>
          <a className="footer-x" href="https://x.com" aria-label="Follow us on X">𝕏</a>
          <h4 className="contact-heading">Contact Info</h4>
          <div className="footer-contacts">
            <a href="tel:+966567570929"><i aria-hidden="true">☎</i><span><small>Phone</small><b>+966567570929</b></span></a>
            <a href="mailto:khalid@devspring.co"><i aria-hidden="true">✉</i><span><small>Email</small><b>khalid@devspring.co</b></span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
