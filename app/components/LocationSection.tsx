import { SectionTitle } from "./SectionTitle";

export function LocationSection() {
  return (
    <section className="location wrap" id="register">
      <div className="location-grid">
        <div className="location-left">
          <div className="location-top">
            <SectionTitle title="Location" variant="location" withPattern={false} />
            <div className="location-offer">
              <p>Exclusive accommodation rates at Le Méridien Hotel for conference participants.</p>
              <a href="https://app.marriott.com/reslink?id=1777300213591&amp;key=GRP&amp;app=resvlink" target="_blank" rel="noreferrer">Get Special Rate</a>
            </div>
          </div>
          <div className="venue-image" role="img" aria-label="Le Méridien Al Khobar at night" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4615.360437808655!2d50.2219516!3d26.3009748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e84b5c433f1b%3A0x311255fae7645068!2sLe%20M%C3%A9ridien%20Al%20Khobar!5e1!3m2!1sen!2seg"
          title="Le Méridien Al Khobar map"
        />
      </div>
    </section>
  );
}
