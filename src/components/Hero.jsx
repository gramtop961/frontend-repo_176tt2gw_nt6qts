import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="[animation-duration:300ms] will-change-transform" data-reveal>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">Skyworld One</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight text-slate-900">
            Shaping Industry Standards, One Detail at a Time.
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Skyworld One delivers precision, reliability, and the kind of craftsmanship that moves industries forward. Our brands operate with uncompromising standards and a focus on measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#/our-company" className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-white font-medium shadow-sm transition-transform duration-150 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
              Explore Our Company
              <ArrowRight size={18} />
            </a>
            <a href="#/contact" className="inline-flex items-center gap-2 rounded-full border border-teal-500 px-5 py-3 text-teal-700 font-medium transition-transform duration-150 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
              Contact
            </a>
          </div>
        </div>
        <div className="relative h-72 md:h-[480px] rounded-2xl" data-reveal>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-teal-50 pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
