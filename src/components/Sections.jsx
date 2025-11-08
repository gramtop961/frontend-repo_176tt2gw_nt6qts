import { CheckCircle2, Factory, FlaskConical, ShieldCheck, Building2, Mail } from 'lucide-react';

function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-screen-xl px-6 ${className}`}>{children}</div>;
}

function AboutTeaser() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div data-reveal>
            <h2 className="text-2xl md:text-3xl font-semibold">A Legacy of Excellence</h2>
            <p className="mt-4 text-slate-600 max-w-prose">
              For decades, Skyworld One has elevated standards across the industrial value chain. We build long-term partnerships, invest in technology, and nurture talent to deliver outcomes that stand the test of time. Our commitment to rigorous processes and continuous improvement ensures every project is executed with precision and care.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6" data-reveal>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500"/><span>Process-driven delivery</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500"/><span>Quality-first mindset</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500"/><span>Responsible growth</span></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Brands() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="flex items-end justify-between" data-reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Our Brands</h2>
          <a href="#/our-brands" className="text-teal-700 hover:text-teal-600">View all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            { name: 'GSS', desc: 'Engineering-grade solutions trusted by leading manufacturers.' },
            { name: 'Zumerret', desc: 'Precision components that power mission-critical applications.' },
          ].map((b) => (
            <div key={b.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md" data-reveal>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{b.name}</h3>
                <Building2 className="text-teal-500" />
              </div>
              <p className="mt-2 text-slate-600">{b.desc}</p>
              <a href={`#/our-brands`} className="mt-4 inline-block text-teal-700 hover:text-teal-600 font-medium">View Brand →</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowWeWork() {
  const items = [
    { icon: Factory, title: 'Production', text: 'Scalable, lean production lines tuned for consistency and throughput.' },
    { icon: ShieldCheck, title: 'Quality Control', text: 'Meticulous inspection frameworks ensure every unit meets spec.' },
    { icon: FlaskConical, title: 'R&D', text: 'Applied research accelerates product improvements and new IP.' },
  ];
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold" data-reveal>How We Work</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md" data-reveal>
              <Icon className="text-teal-500" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Metrics() {
  const stats = [
    { label: 'Years of experience', value: '25+' },
    { label: 'Client satisfaction', value: '98%' },
    { label: 'Facilities', value: '6' },
    { label: 'Countries served', value: '30+' },
  ];
  return (
    <section className="py-10 bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 p-5 text-center">
              <div className="text-2xl font-semibold text-slate-900">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-50 to-white">
      <Container>
        <div className="rounded-2xl border border-teal-100 bg-white p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6" data-reveal>
          <div>
            <h3 className="text-xl font-semibold">Ready to explore what we can build together?</h3>
            <p className="text-slate-600 mt-1">Speak with our team to discuss opportunities and collaborations.</p>
          </div>
          <a href="#/contact" className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-white font-medium shadow-sm transition-transform duration-150 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
            <Mail size={18} /> Contact Us
          </a>
        </div>
      </Container>
    </section>
  );
}

export default function Sections() {
  return (
    <>
      <AboutTeaser />
      <Brands />
      <HowWeWork />
      <Metrics />
      <ContactBand />
    </>
  );
}
