import React, { useState } from 'react';
import { MapPin } from '@phosphor-icons/react';
import { Button, TextLink } from './components.jsx';

// City-wide view only. No office marker or directions without a confirmed address.
export const warsawMapUrl = 'https://www.openstreetmap.org/#map=12/52.2297/21.0122';
export const warsawEmbedUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=20.90%2C52.17%2C21.13%2C52.29&layer=mapnik';

export default function ContactMap() {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <section className="contact-location" id="lokalizacja" aria-labelledby="contact-location-title">
    <div className="container contact-map-grid">
      <div className="contact-map-copy">
        <p className="eyebrow">Siedziba fundacji</p>
        <h2 id="contact-location-title">Warszawa.<br /><em>Tu zaczynamy.</em></h2>
        <p>Warszawa, Polska — miasto siedziby Fundacji Regina Purpurea Fundus.</p>
        <p className="contact-map-note">Mapa pokazuje miasto, nie dokładny adres biura. W sprawie spotkania skontaktuj się z nami.</p>
        <TextLink href={warsawMapUrl} external>Warszawa w OpenStreetMap</TextLink>
      </div>
      <div className="contact-map-panel">
        <div className="contact-map-frame" id="warsaw-map-view" data-lenis-prevent>
          {active ? <iframe src={warsawEmbedUrl} title="Interaktywna mapa Warszawy — widok miasta, bez oznaczenia biura" width="800" height="480" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setFailed(true)}/> : <div className="contact-map-cover">
            <img src="/site/warsaw.webp" width="1600" height="900" loading="lazy" alt="Warszawa nad Wisłą z Mostem Świętokrzyskim."/>
            <div><MapPin size={36} weight="light" aria-hidden="true"/><span>Warszawa, Polska</span><p>Poznaj miasto na interaktywnej mapie.</p></div>
          </div>}
        </div>
        <div className="contact-map-controls">
          <Button secondary aria-controls="warsaw-map-view" aria-expanded={active} onClick={() => { setActive(value => !value); setLoaded(false); setFailed(false); }}>{active ? 'Wyłącz mapę' : 'Włącz mapę'}</Button>
          <p role="status">{failed ? 'Mapa jest niedostępna. Skorzystaj z linku do OpenStreetMap.' : active ? (loaded ? 'Możesz przesuwać i powiększać mapę.' : 'Ładowanie mapy… Jeśli się nie pojawi, skorzystaj z linku do OpenStreetMap.') : 'Mapa zewnętrzna załaduje się po kliknięciu. Nastąpi połączenie z OpenStreetMap.'}</p>
        </div>
        <div className="contact-map-credit">{active ? <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a> : <a href="/informacje/">Fot. Arne Müseler · CC BY-SA 3.0 DE</a>}<a href="/prywatnosc/">Prywatność</a></div>
      </div>
    </div>
  </section>;
}
