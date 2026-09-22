import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
        <Link
          href="https://www.npmjs.com/package/degree-chords"
          className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 hover:bg-white/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold font-mono">degree-chords</h3>
          <h4 className="text-sm text-gray-500">NPM Package</h4>
        </Link>
        <Link
          href="https://community.obsidian.md/plugins/repertoire"
          className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 hover:bg-white/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold font-mono">repertoire</h3>
          <h4 className="text-sm text-gray-500">Obsidian Plugin</h4>
        </Link>
        <div className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 col-span-2 hover:bg-white/30"></div>
        <div className="border rounded-2xl p-4 shadow"></div>
        <div className="col-span-2 flex justify-center items-center flex-col gap-2">
          <h1 className="text-4xl font-bold">Samuel Beard</h1>
          <h2 className="text-xl font-bold text-gray-500 font-mono">
            full_stack_developer
          </h2>
        </div>
        <div className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 hover:bg-white/30"></div>
        <div className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 hover:bg-white/30 md:col-span-3"></div>
        <div className="border rounded-2xl p-4 shadow flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-all duration-300 hover:bg-white/30"></div>
      </div>
    </>
  );
}
