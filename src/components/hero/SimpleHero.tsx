import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroBackground from '../HeroBackground';
import CosmicAccent from './CosmicAccent';
import planetSurface from '@/assets/planetary-surface.png';

/**
 * SimpleHero
 * ----------
 * Finalized Hero section with:
 *  - Fixed header overlap spacing (pt-[140px] clearing headers).
 *  - Constrained typography layout width (max-w-4xl) and unified space-y-6 gap ratios.
 *  - Standardized border radius conformances.
 *  - Multilayered CSS digital planetary horizon.
 */
const SimpleHero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const revealProgressRef = useRef<number>(1);
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.7, delay, ease },
  });
  
  const fadeX = (delay: number, from: number) => ({
    initial: { opacity: 0, x: from },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay, ease },
  });
  
  const fadeScale = (delay: number) => ({
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] flex items-center justify-center px-6 pt-[140px] pb-32 sm:pt-[160px] sm:pb-44 lg:pt-[180px] lg:pb-52 overflow-hidden bg-[#000209]"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <HeroBackground spotlightRef={textRef} revealProgressRef={revealProgressRef} />
      
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] pointer-events-none -z-10 overflow-hidden opacity-30 select-none blur-[140px]">
        <div 
          className={`absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-[#4285f4] rounded-full mix-blend-screen ${shouldReduceMotion ? '' : 'animate-pulse'}`} 
          style={{ animationDuration: '10s' }} 
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-[#8a2be2] rounded-full mix-blend-screen ${shouldReduceMotion ? '' : 'animate-pulse'}`} 
          style={{ animationDuration: '14s' }} 
        />
      </div>

      <div
        ref={textRef}
        className="text-center space-y-6 max-w-4xl mx-auto relative z-10 px-2 w-full -translate-y-4 sm:-translate-y-8"
      >
        {/* Eyebrow Label */}
        <motion.div {...fadeUp(0.05)} className="inline-block">
          <span className="text-xs font-bold tracking-[0.25em] text-[#b56dff] uppercase">
            WEB DEVELOPMENT + AI SOLUTIONS
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-light tracking-tight leading-[1.08] text-balance text-[clamp(2rem,6vw,4.5rem)]"
        >
          {/* Desktop / tablet: keep the accent as a dedicated statement line */}
          <span className="hidden sm:flex flex-col items-center gap-2 md:gap-3">
            <motion.span {...fadeX(0.18, -60)} className="block text-wdp-text">
              Let's launch your business into the
            </motion.span>
            <motion.span {...fadeScale(0.32)} className="inline-block origin-center whitespace-nowrap">
              <CosmicAccent text="Next Dimension" />
              <span className="text-wdp-text font-light">.</span>
            </motion.span>
          </span>

          {/* Mobile: three stacked lines for breathing room */}
          <span className="sm:hidden flex flex-col items-center gap-2">
            <motion.span {...fadeX(0.18, -60)} className="block text-wdp-text leading-tight">
              Let's launch your
            </motion.span>
            <motion.span {...fadeX(0.24, -40)} className="block text-wdp-text leading-tight">
              business into the
            </motion.span>
            <motion.span {...fadeScale(0.38)} className="block leading-tight origin-center whitespace-nowrap">
              <CosmicAccent text="Next Dimension" />
              <span className="text-wdp-text font-light">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Subcopy */}
        <motion.p
          {...fadeUp(0.62)}
          className="text-lg sm:text-xl text-wdp-text-secondary max-w-3xl mx-auto leading-relaxed text-balance"
        >
          We build fast, modern websites, scalable web applications, and intelligent business systems that drive growth, streamline operations, and deliver real results.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          {...fadeScale(0.78)} 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xs sm:max-w-none mx-auto px-4"
        >
          {/* Primary CTA (Solid Brand Gradient) */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} aria-label="Start a Project" className="w-full sm:w-auto">
            <Button 
              variant="default" 
              size="lg" 
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto !bg-brand-gradient text-white border-0 hover:scale-[1.02] transition-all hover:shadow-[0_0_25px_rgba(66,133,244,0.45),_0_0_35px_rgba(138,43,226,0.35)] shadow-lg duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </Link>
          
          {/* Secondary CTA (Clean Outline style mapped to glass) */}
          <Link to="/services" onClick={() => window.scrollTo(0, 0)} aria-label="Explore Services" className="w-full sm:w-auto">
            <Button 
              variant="glass" 
              size="lg" 
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-[1.02] duration-300"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Layered Digital Planetary Horizon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] lg:w-[100vw] min-w-[1200px] flex justify-center pointer-events-none z-0">
        {/* Deep Background Aura */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-brand-gradient blur-[140px] opacity-30 pointer-events-none" />

        {/* Planet Surface Image Asset */}
        <img 
          src={planetSurface} 
          alt="Planet Horizon" 
          className="w-full h-auto object-contain object-bottom opacity-100 drop-shadow-[0_-20px_40px_rgba(138,43,226,0.4)]" 
        />

        {/* Planet Surface Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#000209] to-transparent pointer-events-none" />
      </div>

      {/* Bottom fade for page transitions */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-[#000209] to-transparent z-10"
      />
    </section>
  );
};

export default SimpleHero;
