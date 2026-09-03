import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './home-scroll-motion.css';
import { installPageScrollMotion } from './home-scroll-motion.js';
import { projectsRevealGroups, projectsFooterReveal } from './projects-scroll-motion.js';

export const mountProjectsScrollMotion = root => installPageScrollMotion(root, { gsap, ScrollTrigger, Lenis }, window, projectsRevealGroups, projectsFooterReveal);
