import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  useEffect(() => {
    console.log('✅ GSAP و ScrollTrigger محمّلة بنجاح');

    // Fade in on scroll
    gsap.utils.toArray('.scroll-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Slide left
    gsap.utils.toArray('.scroll-reveal-left').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Slide right
    gsap.utils.toArray('.scroll-reveal-right').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Scale
    gsap.utils.toArray('.scroll-reveal-scale').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    console.log('🎨 جميع الـ scroll animations تم تعيينها بنجاح');
  }, []);

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};
