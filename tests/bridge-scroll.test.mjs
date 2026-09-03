import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { missionRevealGroups } from '../src/site/mission-scroll-motion.js';
test('bridge reveal uses the two-way GSAP state without translating the photo frame',()=>{
 const group=missionRevealGroups.find(group=>group.anchor==='.city-context');
 assert.deepEqual(group.targets,[':scope > figure > figcaption']);
 assert.equal(group.end,'bottom 30%');
 const css=fs.readFileSync('src/site/bridge-scroll.css','utf8');
 assert.match(css,/data-scroll-reveal="visible"/);
 assert.match(css,/@keyframes bridge-frame-open/);
 assert.match(css,/@keyframes bridge-photo-settle/);
 assert.match(css,/clip-path:inset\(0% 0% round 0px\)/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/animation:none!important/);
 assert.match(css,/max-width:900px/);
});
test('Warsaw image remains complete at rest and its credit remains outside the animated crop',()=>{
 const html=fs.readFileSync('dist/client/misja/index.html','utf8');
 assert.match(html,/id="warszawa"/);
 assert.match(html,/class="city-photo-window"><img[^>]+warsaw.webp/);
 assert.match(html,/<\/div><figcaption><span>Warszawa, Polska/);
 assert.match(html,/Fot. Arne Müseler · CC BY-SA 3.0 DE/);
});
