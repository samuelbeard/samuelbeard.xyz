import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuel Beard</title>
                <meta name="description" content="Web and Software Developer" />
            </Head>
            <div className="min-h-screen bg-brand-black">
                <Header />
                <div className="flex h-[90vh] flex-col">
                    <div className="h-1/2 w-full px-3">
                        <div className="animate-in flex h-full items-center rounded-xl bg-brand-dark-blue p-10">
                            <div>
                                <h1 className="text-3xl font-bold text-brand-white sm:text-8xl">
                                    Samuel Beard
                                </h1>
                                <h3 className="text-sm text-brand-white sm:text-3xl">
                                    Web and Software Developer
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-around md:h-1/2 md:flex-row">
                        <div className="w-full pt-3 pl-3 pr-3 md:h-full md:w-1/3 md:py-3 md:pr-0">
                            <Link
                                href="/blog"
                                className="animate-in flex h-full items-center justify-center rounded-xl bg-brand-green p-7 transition-all hover:bg-zinc-900"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <h2 className="h2 text-4xl text-brand-white">
                                    Blog
                                </h2>
                            </Link>
                        </div>
                        <div className="w-full p-3 md:w-1/3">
                            <Link
                                href="/creative/days"
                                className="animate-in group relative flex h-full flex-col items-center justify-center rounded-xl bg-brand-white p-7 text-black transition-all hover:bg-zinc-900"
                                style={{ animationDelay: "1s" }}
                            >
                                <h2 className="h2 mb-0 text-4xl text-zinc-900 transition-all group-hover:text-zinc-200">
                                    Creative
                                </h2>
                                <h3 className="mt-0 font-bold text-zinc-900 transition-all group-hover:text-zinc-200">
                                    Every Day of my Life
                                </h3>
                                <h4 className="absolute left-3 top-3 rounded-lg bg-zinc-900 px-2 py-1 text-xs text-brand-white transition-all group-hover:bg-white group-hover:text-zinc-900">
                                    Featured
                                </h4>
                            </Link>
                        </div>
                        <div className="h-full w-full pr-3 pl-3 md:w-1/3 md:py-3 md:pl-0">
                            <Link
                                href="/creative/qrcode"
                                className="animate-in group relative flex h-full flex-col items-center justify-center rounded-xl bg-brand-yellow p-7 transition-all hover:bg-zinc-900"
                                style={{ animationDelay: "1.5s" }}
                            >
                                <h2 className="h2 text-4xl text-zinc-900 transition-all group-hover:text-zinc-200">
                                    QR Generator
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
