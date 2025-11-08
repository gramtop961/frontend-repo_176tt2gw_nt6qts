import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-screen-xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600">© {year} Skyworld One. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#/privacy-policy" className="text-sm text-slate-700 hover:text-teal-600">Privacy Policy</a>
          <a href="#/terms" className="text-sm text-slate-700 hover:text-teal-600">Terms</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-700 hover:text-teal-600">
            <Linkedin />
          </a>
        </nav>
      </div>
    </footer>
  );
}
