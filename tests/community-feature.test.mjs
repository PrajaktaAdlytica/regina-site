import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('community editorial retains the original picture, copy and destination', () => {
 const source = fs.readFileSync('src/site/Pages.jsx','utf8');
 const section = source.split('id="rozwoj-spoleczny"')[1].split('</section>')[0];
 assert.match(section,/name="community"/);
 assert.match(section,/Kompetencje ludzi/);
 assert.match(section,/Potencjał społeczności/);
 assert.match(section,/href="\/dzialania\/#spolecznosc"/);
 assert.match(section,/Ilustracja koncepcyjna/);
 assert.ok(fs.existsSync('public/site/community.webp'));
 const css = fs.readFileSync('src/site/community-feature.css','utf8');
 assert.match(css,/object-fit:contain/);
 assert.match(css,/height:auto/);
 assert.match(css,/mix-blend-mode:multiply/);
 assert.match(css,/max-width:900px/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.doesNotMatch(css,/object-fit:cover|clip-path/);
});
