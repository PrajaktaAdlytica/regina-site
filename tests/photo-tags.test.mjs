import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('public content pages have no visible thematic-photo tags or repeated source notes',()=>{
 for(const route of ['', 'misja/', 'dzialania/', 'projekty/', 'partnerstwo/', 'kontakt/']) {
  const html=fs.readFileSync(`dist/client/${route}index.html`,'utf8');
  const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ');
  assert.doesNotMatch(visible,/fotografi[ae] tematyczn[ae]/i,route);
  assert.doesNotMatch(html,/class="(?:photo-note|atlas-source-note|explorer-provenance)"/,route);
 }
});
test('central photo credits, disclosures and meaningful image descriptions remain',()=>{
 const legal=fs.readFileSync('dist/client/informacje/index.html','utf8');
 for(const text of ['id="fotografie"','Kampus Production','cottonbro studio','fauxels','ThisIsEngineering','Licencja Pexels','nie stanowią dokumentacji jej działalności','CC BY-SA 3.0 DE']) assert.ok(legal.includes(text),text);
 const mission=fs.readFileSync('dist/client/misja/index.html','utf8');
 assert.match(mission,/alt="Wspólna praca z mentorką/);
 assert.match(mission,/Fot. Arne Müseler/);
});
