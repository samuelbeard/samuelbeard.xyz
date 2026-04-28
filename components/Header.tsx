import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-line/15 pb-5 font-display text-sm font-semibold uppercase tracking-[0.18em]">
      <Link href="/">Samuel Beard</Link>
      <div className="flex gap-4">
        <Link
          className="rounded-sm px-2 py-1 transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          href="/work"
        >
          Work
        </Link>
        <a
          className="rounded-sm px-2 py-1 transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          href="mailto:samuel@samuelbeard.xyz"
        >
          Email me
        </a>
      </div>
    </div>
  );
}
