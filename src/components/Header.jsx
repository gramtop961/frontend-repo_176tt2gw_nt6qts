import { useEffect, useRef, useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Our Company', href: '#/our-company' },
  { label: 'Our Brands', href: '#/our-brands' },
  { label: 'How We Work', href: '#/how-we-work' },
  { label: 'People & Culture', href: '#/people-and-culture' },
];

function Logo() {
  return (
    <a href="#/" className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 text-white font-bold">S</span>
      <span className="font-semibold tracking-tight text-slate-900">Skyworld One</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const firstFocusable = useRef(null);
  const lastFocusable = useRef(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
      if (!open) return;
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        if (!firstFocusable.current) firstFocusable.current = focusables[0];
        if (!lastFocusable.current) lastFocusable.current = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstFocusable.current) {
          e.preventDefault();
          lastFocusable.current.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable.current) {
          e.preventDefault();
          firstFocusable.current.focus();
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close on route change (hash change)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 sticky top-0 z-40">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-800 hover:text-teal-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#/contact" className="inline-flex items-center rounded-full border border-teal-500 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50 transition-transform duration-150 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button aria-label="Open menu" onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] transform bg-white shadow-xl transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        ref={panelRef}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200">
          <Logo />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
            <X />
          </button>
        </div>
        <div className="px-5 py-4 flex flex-col gap-2">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-slate-900 hover:bg-slate-50"
              ref={idx === 0 ? firstFocusable : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-teal-500 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50"
            ref={lastFocusable}
          >
            Contact
          </a>
          <div className="mt-4 border-t border-slate-200 pt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-teal-600">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
