import Head from "next/head"
import Image from "next/image"

export default function Home() {
    return (
        <div className="background h-screen w-screen bg-slate-600 flex justify-center items-center flex-col">
            <h1 className="text-slate-200 text-6xl font-bold uppercase">
                Samuel Beard
            </h1>
            <h2 className="text-slate-400 text-2xl font-semibold">
                I'll get around to building something here soon...
            </h2>
        </div>
    )
}
