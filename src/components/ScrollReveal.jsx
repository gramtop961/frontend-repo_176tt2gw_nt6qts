import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-3');
            e.target.classList.add('opacity-100', 'translate-y-0');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el, idx) => {
      el.classList.add('opacity-0', 'translate-y-3', 'transition', 'duration-300', 'ease-out');
      el.style.transitionDelay = `${Math.min(idx * 80, 320)}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
