import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './home-scroll-motion.css';
import { installPageScrollMotion } from './home-scroll-motion.js';
import { contactRevealGroups, contactFooterReveal } from './contact-scroll-motion.js';
export const mountContactScrollMotion = root => installPageScrollMotion(root,
  { gsap, ScrollTrigger, Lenis }, window, contactRevealGroups, contactFooterReveal);
