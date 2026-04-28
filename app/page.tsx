import { ArrowRight, CheckCircle2, Mail, MapPin, Sparkles } from "lucide-react";

const services = [
  "Church websites that feel current without feeling corporate",
  "Sunday service pages, events, giving links and newcomer pathways",
  "Fast rebuilds, tidy updates and ongoing support that stays affordable",
];

const values = [
  {
    label: "Built for UK churches",
    detail:
      "Clear language for visitors, members, families and local communities.",
  },
  {
    label: "Straightforward pricing",
    detail:
      "Scoped properly, explained plainly, and never padded with agency overhead.",
  },
  {
    label: "Modern but warm",
    detail:
      "Clean design, mobile-first performance and a tone that still feels human.",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-hero-field text-foreground"
      // style={
      //   {
      //     "--spot-x": `${spot.x}%`,
      //     "--spot-y": `${spot.y}%`,
      //   } as React.CSSProperties
      // }
    >
      <section className="church-grid relative min-h-[92vh] px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-line/15 pb-5 font-display text-sm font-semibold uppercase tracking-[0.18em]">
          <span>Samuel Beard</span>
          <a
            className="rounded-sm px-2 py-1 transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            href="mailto:samuel@samuelbeard.xyz"
          >
            Email me
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 pb-12 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pt-24">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 border border-line/20 bg-card/70 px-3 py-2 text-sm font-semibold text-primary shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4" /> Freelance web developer for
              modern churches
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.94] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
              Church websites that feel clear, current and welcoming.
            </h1>
            <p className="mt-7 max-w-2xl font-editorial text-xl leading-8 text-muted-foreground sm:text-2xl">
              I help UK church leaders improve their online presence with
              thoughtful design, practical technology and friendly pricing that
              fits ministry realities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-lift transition hover:-translate-y-1 hover:bg-copper focus:outline-none focus:ring-2 focus:ring-ring"
                href="mailto:samuel@samuelbeard.xyz?subject=Website%20project%20enquiry"
              >
                Start a conversation{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                className="inline-flex items-center justify-center border border-line/25 bg-card/60 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] transition hover:-translate-y-1 hover:border-primary hover:bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                href="#services"
              >
                See what I do
              </a>
            </div>
          </div>

          <aside className="relative animate-drift bg-ink-depth p-6 text-surface-strong-foreground shadow-soft lg:mb-6">
            <div className="grain absolute inset-0 opacity-30" />
            <div className="relative border border-surface-strong-foreground/20 p-6">
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                A better first impression
              </p>
              <p className="mt-8 font-editorial text-4xl font-semibold leading-tight">
                For people checking service times, planning a first visit, or
                wondering if your church is for them.
              </p>
              <div className="mt-10 flex items-center gap-3 border-t border-surface-strong-foreground/20 pt-5 text-sm font-semibold text-surface-strong-foreground/80">
                <MapPin className="h-4 w-4 text-accent" /> Based for UK
                churches, available remotely
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="services"
        className="bg-background px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What I can help with
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Simple, useful websites without the agency price tag.
            </h2>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="group flex gap-4 border border-line/15 bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary transition group-hover:text-copper" />
                <p className="font-editorial text-2xl font-medium leading-snug">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.label}
              className="border-t-4 border-primary bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-copper"
            >
              <h3 className="font-display text-2xl font-extrabold">
                {item.label}
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-depth px-5 py-16 text-surface-strong-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Tell me what your church needs online. I’ll keep it practical.
            </h2>
          </div>
          <a
            className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground transition hover:-translate-y-1 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            href="mailto:samuel@samuelbeard.xyz?subject=Church%20website%20enquiry"
          >
            <Mail className="h-4 w-4" /> Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
