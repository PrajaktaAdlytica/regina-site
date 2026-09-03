import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Homepage introduction uses a scoped plum surface and preserves content, CTA and reveal anchor', () => {
  const html = fs.readFileSync('dist/client/index.html','utf8');
  const intro = html.split('<section class="home-intro-surface">')[1]?.split('</section>')[0];
  assert.ok(intro);
  for (const token of ['class="home-intro container"', 'Fundacja Regina Purpurea Fundus', 'od ponad 20 lat', 'Polski i społeczności międzynarodowej.', 'Polska · Współpraca międzynarodowa', 'href="https://www.acceleratepoland.org"', 'Poznaj nasze programy']) assert.ok(intro.includes(token), token);
  const css = fs.readFileSync('src/site/styles.css','utf8');
  assert.match(css,/\.home-intro-surface \{\s*background: var\(--rp-plum\);\s*color: var\(--rp-inverse\)/);
  assert.match(css,/\.home-intro-surface \.site-button \.button-wipe \{\s*background: var\(--rp-blush\);\s*color: var\(--rp-plum\)/);
  assert.match(css,/\.home-intro-surface a:focus-visible/);
});

test('Homepage restores Hubert’s exact hero copy, both introduction paragraphs and early Accelerate CTA', async () => {
  const { organisation } = await import('../src/site/content.js');
  const html = fs.readFileSync('dist/client/index.html', 'utf8');
  const plain = value => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), 'Fundacja Regina Purpurea Fundus od ponad 20 lat działamy na rzecz rozwoju społecznego i gospodarczego Polski i społeczności międzynarodowej.');
  const intro = html.split('<section class="home-intro-surface">')[1].split('</section>')[0];
  assert.ok(plain(intro).includes('Wspieramy edukację zawodową, transformację technologiczną przedsiębiorstw oraz międzynarodową współpracę społeczną.'));
  assert.doesNotMatch(intro, /href="\/dzialania\/"/);
  assert.match(intro, /href="https:\/\/www\.acceleratepoland\.org"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/);
  const body = html.split('class="container section mission-intro"')[1].split('</section>')[0];
  assert.ok(plain(body).includes(organisation.intro));
  assert.ok(plain(body).includes(organisation.purpose));
  assert.ok(html.indexOf('class="container section accelerate-banner"') > html.indexOf('class="container section mission-intro"'));
  assert.ok(html.indexOf('class="container section accelerate-banner"') < html.indexOf('photo-pillars'));
  assert.equal((html.match(/class="container section accelerate-banner"/g) || []).length, 1);
});

test('Navbar Contact icon is visible at rest while other link icons keep hover reveal', () => {
  const css=fs.readFileSync('src/site/sticky-header.css','utf8');
  assert.match(css,/\.site-header \.desktop-nav a\[href="\/kontakt\/"\] > svg \{ opacity: 1; transform: none; \}/);
  assert.match(fs.readFileSync('src/site/styles.css','utf8'),/\.desktop-nav a > svg \{\s*opacity: 0/);
});
