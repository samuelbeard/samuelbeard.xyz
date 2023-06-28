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
            </Head>
            <div className="absolute top-0 h-screen w-screen bg-stone-800 flex">
                <div className="border-2 rounded-sm border-slate-100 m-10 w-full flex flex-col justify-between">
                    <div className="flex flex-col justify-between h-full">
                        <Header />

                        <section className="flex-grow flex flex-col justify-center">
                            <div className="pl-10">
                                <h1 className="h1 font-normal text-3xl sm:text-9xl m-0">
                                    Samuel&nbsp;Beard
                                </h1>
                                <h2 className="h2 text-2xl font-extralight m-0 ml-3 text-slate-300">
                                    Web Developer &amp; Software Developer
                                </h2>
                                {/* <div className="mt-10 ml-3 flex flex-col">
                                    <Link
                                        href=""
                                        className="font-bold hover:tracking-widest transition-all text-stone-100 mt-3"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href=""
                                        className="font-bold hover:tracking-widest transition-all text-stone-100 mt-3"
                                    >
                                        Writing
                                    </Link>
                                </div> */}
                            </div>
                        </section>
                        <div className="p-10 xw-1/4 border-t-2 xborder-l-2 border-stone-100 ml-auto">
                            <p className="text-stone-100 w-1/4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus vero adipisci quas
                                architecto deleniti. Voluptate, voluptatibus
                                dolorum. Delectus omnis error, ipsam iste totam
                                nihil et debitis qui soluta vitae nam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
