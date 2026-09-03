import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const html = route => fs.readFileSync(`dist/client/${route}index.html`,'utf8');
test('selected screenshot treatments appear on their intended pages',()=>{
 const home=html('');
 assert.match(home,/photo-pillars/); assert.match(home,/programme-explorer/);
 for(const id of ['innowacje','przedsiebiorcy','spolecznosc','wspolpraca','badania','edukacja']) assert.ok(home.includes(`/dzialania/#${id}`));
 assert.match(html('misja/'),/mission-photo-hero/);
 assert.match(html('dzialania/'),/editorial-chapters/);
 assert.match(html('partnerstwo/'),/partnership-collage.webp/);
 assert.match(html('projekty/'),/projects-collage.webp/);
});
test('all six activity chapters retain their content and use photographic panels',()=>{
 const activities=html('dzialania/');
 assert.equal((activities.match(/class="programme-art"/g)||[]).length,6);
 assert.match(activities,/research-editorial/);
 assert.doesNotMatch(activities,/Raport rozwoju lokalnego 2023|Pobierz raport/);
});
test('new artwork and photographs have explicit provenance without claiming endorsement',()=>{
 const legal=html('informacje/');
 for(const credit of ['Kampus Production','cottonbro studio','fauxels','ThisIsEngineering']) assert.ok(legal.includes(credit));
 assert.match(legal,/Licencja Pexels/); assert.match(legal,/nie są zespołem fundacji/);
 for(const asset of ['mentoring.jpg','students.jpg','meeting.jpg','laboratory.jpg','partnership-collage.webp','projects-collage.webp']) assert.ok(fs.existsSync(`dist/client/site/${asset}`));
});
