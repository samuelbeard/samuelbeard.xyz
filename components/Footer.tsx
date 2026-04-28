import { Mail } from "lucide-react";

type Props = {
  subtitle?: string;
  title?: string;
  linkCopy?: string;
};

export default function Footer({ subtitle, title, linkCopy }: Props) {
  return (
    <section className="bg-ink-depth px-5 py-16 text-surface-strong-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
            {subtitle || "Ready when you are"}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {title ||
              "Tell me what your church needs online. I’ll keep it practical."}
          </h2>
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground transition hover:-translate-y-1 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          href="mailto:samuel@samuelbeard.xyz?subject=Church%20website%20enquiry"
        >
          <Mail className="h-4 w-4" />
          {linkCopy || "Get in touch"}
        </a>
      </div>
    </section>
  );
}
