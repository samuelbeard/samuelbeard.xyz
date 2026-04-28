import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Link,
  MapPin,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Freedom Church Cheltenham",
    url: "freedomcheltenham.church",
    type: "Website Build and Ongoing Support",
    image: "/img/freedomcheltenhamchurch.png",
    summary:
      "A website built to feel welcoming and express the personality of the church. With ongoing support to keep the site tidy and up to date without needing an agency.",
    // details: [
    //   "Mobile-first Sunday information",
    //   "Simple visitor journey",
    //   "Cleaner events and ministries layout",
    // ],
    result:
      "We've seen so many people walk through our doors saying they found us online. It's been a huge help to have a site that looks so great.",
  },
  // {
  //   title: "Newcomer pathway",
  //   url: "welcome-flow.example",
  //   type: "Content and UX",
  //   summary:
  //     "A practical route for first-time visitors, with friendly language, obvious calls to action and fewer dead ends across the site.",
  //   details: [
  //     "Plan your visit flow",
  //     "Contact and connect forms",
  //     "Plain-English copy improvements",
  //   ],
  //   result:
  //     "The site became easier for volunteers to explain and easier for new people to act on without feeling overwhelmed.",
  // },
  // {
  //   title: "Ongoing web support",
  //   url: "monthly-care.example",
  //   type: "Care and updates",
  //   summary:
  //     "Reliable updates for teams who need their site kept tidy without hiring an agency or learning a complicated system.",
  //   details: [
  //     "Event and page updates",
  //     "Performance tidy-ups",
  //     "Responsive fixes and support",
  //   ],
  //   result:
  //     "A calmer, more dependable setup for church teams who need changes handled quickly and affordably.",
  // },
];

export default function Page() {
  return (
    <>
      <section className="church-grid relative xmin-h-[92vh] px-5 py-6 sm:px-8 lg:px-12">
        <Header />
        <div className="mx-auto grid max-w-7xl gap-10 pb-14 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:pt-24">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 border border-line/20 bg-card/70 px-3 py-2 text-sm font-semibold text-primary shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4" /> Previous work
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">
              Built for real ministry life.
            </h1>
          </div>

          <div className="bg-ink-depth p-6 text-surface-strong-foreground shadow-soft">
            <div className="border border-surface-strong-foreground/20 p-6">
              <p className="font-editorial text-3xl font-semibold leading-tight">
                My work is focused on making churches easier to find, easier to
                understand and easier to connect with online.
              </p>
              {/* <a
                className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground transition hover:-translate-y-1 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                href="mailto:hello@samuelbeard.dev?subject=Previous%20work%20request"
              >
                Ask for examples <ExternalLink className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl py-24 space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="grid overflow-hidden border border-line/15 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div
              className={`${index % 2 === 1 ? "lg:order-2" : ""} bg-background p-4 sm:p-6`}
            >
              <div className="overflow-hidden border border-line/15 bg-surface shadow-soft">
                <div className="flex items-center gap-2 border-b border-line/15 bg-card px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="ml-3 truncate font-display text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {project.url}
                  </span>
                </div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt="Placeholder"
                    width={1920}
                    height={1080}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {project.type}
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-7 border-l-4 border-secondary pl-5 font-editorial text-xl font-semibold leading-tight">
                {project.result}
              </div>
              {/* <ul className="mt-8 space-y-3">
                {project.details?.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 font-semibold"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul> */}
            </div>
          </article>
        ))}
      </section>
      <Footer
        subtitle="Want something similar?"
        title="Let's talk about what your church needs next."
        linkCopy="Start a conversation"
      />
    </>
  );
}
