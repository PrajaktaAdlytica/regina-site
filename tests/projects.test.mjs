import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { projects } from '../src/site/content.js';
import { projectsRevealGroups } from '../src/site/projects-scroll-motion.js';

test('All Accelerate destinations use the user-confirmed .org domain', () => {
  assert.equal(projects[0].url, 'https://www.acceleratepoland.org');
  assert.equal(projects[0].domain, 'acceleratepoland.org');
  for (const file of ['dist/client/index.html', 'dist/client/projekty/index.html']) {
    const html = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(html, /acceleratepoland\.org\.pl|accelerate-poland-site\.vercel\.app/);
    assert.match(html, /href="https:\/\/www\.acceleratepoland\.org"/);
  }
});

test('Each project displays its own original logo with intact links and contrast-safe backplates', () => {
  const html = fs.readFileSync('dist/client/projekty/index.html', 'utf8');
  assert.equal(new Set(projects.map(p => p.logo)).size, 3);
  for (const p of projects) {
    assert.ok(fs.existsSync(`public${p.logo}`), p.logo);
    assert.ok(fs.existsSync(`dist/client${p.logo}`), p.logo);
    assert.ok(html.includes(`src="${p.logo}" alt="Logo ${p.title}"`));
    assert.ok(html.includes(`class="project-brand-stage" data-brand="${p.id}"`));
    assert.ok(html.includes(`href="${p.url}"`));
  }
  const css = fs.readFileSync('src/site/projects.css', 'utf8');
  assert.match(css, /object-fit:contain/);
  assert.match(css, /data-brand="safta"\] \{ background:#202c38/);
  const home = fs.readFileSync('dist/client/index.html', 'utf8');
  assert.ok(home.includes(`src="${projects[0].logo}" alt="ACCELERATE POLAND"`));
});

test('Projects redesign is confined to its opening and preserves all three external project cards', () => {
  const html = fs.readFileSync('dist/client/projekty/index.html', 'utf8');
  assert.match(html, /id="projects-title"/);
  assert.match(html, /Inicjatywy, które/);
  assert.match(html, /łączą możliwości/);
  assert.match(html, /Poznaj aktualne projekty Fundacji Regina Purpurea Fundus/);
  assert.match(html, /class="projects-opening-count"><span>03<\/span>/);
  for (const p of projects) {
    assert.ok(html.includes(p.title));
    assert.ok(html.includes(`href="${p.url}"`));
    assert.ok(html.includes(`class="project-panel ${p.theme}"`));
  }
  assert.match(html, /target="_blank"/);
  assert.match(html, /otwiera nową kartę/);
  assert.match(html, /class="connected-collage container"/);
  assert.match(html, /class="container section project-context"/);
  assert.match(html, /\/site\/projects-collage.webp/);
});

test('Project card hover is keyboard-accessible and stays separate from GSAP translate', () => {
  const css = fs.readFileSync('src/site/projects.css', 'utf8');
  assert.match(css, /project-panel:focus-within::after/);
  assert.match(css, /project-panel:hover::after/);
  assert.match(css, /transform-origin:left center/);
  assert.match(css, /transform-origin:right center/);
  assert.match(css, /transform-origin:center bottom/);
  assert.match(css, /pointer-events:none/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /\(hover:hover\) and \(pointer:fine\)/);
  assert.match(css, /max-width:760px/);
  assert.doesNotMatch(css, /translate:|cursor:pointer/);
});

test('Projects reveal groups cover all sections and card rows in both directions', () => {
  for (const anchor of ['.projects-opening-grid', '.connected-collage', '.connected-links', '.project-reveal-row:nth-child(odd)', '.project-reveal-row:nth-child(even)', '.project-context', '.cta-inner']) {
    assert.ok(projectsRevealGroups.some(group => group.anchor === anchor), anchor);
  }
  for (const group of projectsRevealGroups) {
    assert.ok(group.reverseHorizontal);
    assert.equal(group.distance,96);
    assert.ok(group.directions.every(direction => ['left', 'right'].includes(direction)));
  }
  const source = fs.readFileSync('src/site/projects-scroll-engine.js', 'utf8');
  assert.match(source, /gsap\/ScrollTrigger/);
  assert.match(source, /import Lenis from 'lenis'/);
  assert.match(source, /installPageScrollMotion/);
  assert.match(source, /projectsFooterReveal/);
});

test('all three complete project cards animate within stationary layout rows', () => {
  const html = fs.readFileSync('dist/client/projekty/index.html','utf8');
  assert.equal((html.match(/class="project-reveal-row"><article/g) || []).length,3);
  for (const group of projectsRevealGroups.filter(group => group.anchor.includes('project-reveal-row'))) {
    assert.deepEqual(group.targets,[':scope > .project-panel']);
  }
});
