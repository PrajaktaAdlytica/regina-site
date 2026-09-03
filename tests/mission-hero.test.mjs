import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('Misja editorial hero retains its photo, message, actions and real goal anchor',()=>{
 const html=fs.readFileSync('dist/client/misja/index.html','utf8');
 const hero=html.split('class="mission-photo-hero')[1].split('</section>')[0];
 for(const text of ['Wiedza.','Współpraca.','Trwały wpływ.','Ponad dwie dekady działalności','mentoring.jpg','/partnerstwo/','/dzialania/','href="#cele"']) assert.ok(hero.includes(text),text);
 assert.doesNotMatch(hero,/<figcaption>/);
 assert.match(html,/id="cele"/);
 assert.equal((html.match(/<h1/g)||[]).length,1);
 assert.match(html,/data-page="\/misja\/"/);
});
test('Misja removes duplicate dividers without changing shared navigation rules',()=>{
 const css=fs.readFileSync('src/site/mission-hero.css','utf8');
 assert.match(css,/\[data-page="\/misja\/"\] > \.site-header \{ border-bottom:0; \}/);
 assert.match(css,/\.mission-photo-hero\.mission-hero-editorial \{[^}]*border:0/);
 assert.match(css,/max-width:900px/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/focus-visible/);
 assert.doesNotMatch(css,/desktop-nav/);
 assert.doesNotMatch(css,/\.header-inner/); // Shared compact navbar now owns every route's density.
 assert.match(css,/margin-block:8px 48px/);
 assert.match(css,/grid-template-columns:1fr 1.08fr/);
});
