import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './home-scroll-motion.css';
import { installHomeScrollMotion } from './home-scroll-motion.js';

export const mountHomeScrollMotion = root => installHomeScrollMotion(root, { gsap, ScrollTrigger, Lenis });
