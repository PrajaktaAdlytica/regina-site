import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './home-scroll-motion.css';
import { installPageScrollMotion } from './home-scroll-motion.js';
import { activitiesRevealGroups } from './activities-scroll-motion.js';

export const mountActivitiesScrollMotion = root => installPageScrollMotion(root, { gsap, ScrollTrigger, Lenis }, window, activitiesRevealGroups);
