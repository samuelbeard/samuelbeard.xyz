import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="md:hidden md:col-span-2 flex justify-center items-center flex-col gap-2 py-12">
          <h1 className="text-4xl font-bold">Samuel Beard</h1>
          <h2 className="text-xl font-bold text-gray-500 font-mono">
            full_stack_developer
          </h2>
        </div>
        <Link
          href="https://www.npmjs.com/package/degree-chords"
          className="hp-card hover:rotate-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold font-mono">degree-chords</h3>
          <h4 className="text-sm text-gray-500">NPM Package</h4>
        </Link>
        <Link
          href="https://community.obsidian.md/plugins/repertoire"
          className="hp-card hover:-rotate-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold font-mono">repertoire</h3>
          <h4 className="text-sm text-gray-500">Obsidian Plugin</h4>
        </Link>
        <div className="hp-card md:col-span-2"></div>
        <div className="hp-card"></div>
        <div className="hidden md:col-span-2 md:flex justify-center items-center flex-col gap-2">
          <h1 className="text-4xl font-bold">Samuel Beard</h1>
          <h2 className="text-xl font-bold text-gray-500 font-mono">
            full_stack_developer
          </h2>
        </div>
        <div className="hp-card"></div>
        <div className="hp-card md:col-span-3"></div>
        <Link
          href="/qr"
          className="hp-card hover:rotate-1"
        >
          <h3 className="text-2xl font-bold font-mono">qr_codes</h3>
          <h4 className="text-sm text-gray-500">Generate QR Codes</h4>
        </Link>
      </div>
    </>
  );
}
