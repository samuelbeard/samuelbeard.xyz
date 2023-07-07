import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NextPage } from "next"
import Link from "next/link"
import SidebarDecoration from "../components/SidebarDecoration"
import { RiCheckboxBlankCircleFill, RiFlashlightFill } from "react-icons/ri"
import { Suspense } from "react"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuel Beard</title>
            </Head>
            <SidebarDecoration />
            <div className="min-h-screen sm:pl-[150px]">
                <div className="px-2 sm:px-5">
                    <div className="sm:pl-10 flex flex-col justify-between h-screen">
                        <section className="flex-grow flex flex-col justify-center">
                            <div className="xpl-10">
                                <h1 className="glitch font-display text-slate-900 text-3xl sm:text-5xl lg:text-8xl">
                                    <span>Samuel Beard</span>
                                    Samuel_Beard
                                    <span>Samuel Beard</span>
                                </h1>
                                <h2 className="h2 font-sans text-2xl font-normal m-0 mt-0">
                                    Web&nbsp;Developer &amp;
                                    Software&nbsp;Developer
                                </h2>
                                {/* <div className="landing-links">
                                    <Link href="/projects">PROJECTS</Link>
                                    <Link href="/creative">CREATIVE</Link>
                                    <Link href="/knowledge">
                                        KNOWLEDGE BASE
                                    </Link>
                                </div> */}
                                <Link href="/blog" className="mt-10 block">
                                    <svg
                                        width={300}
                                        height={100}
                                        className="group hover:blur-none xdrop-shadow-md hover:drop-shadow-xl transition-all"
                                    >
                                        <polygon
                                            shapeRendering="crispEdges"
                                            vectorEffect="non-scaling-stroke"
                                            points="0,0 260,0 300,40 300,100 200,100 190,90 100,90 90,100 40,100 0,60"
                                            className="fill-black transition-all xstroke-2 stroke-gray-400 group-hover:stroke-black"
                                        />
                                        <text
                                            x="115"
                                            y="57"
                                            fill="white"
                                            className="text-3xl group-hover:fill-red-600 transition-all"
                                        >
                                            BLOG
                                        </text>
                                    </svg>
                                </Link>
                                {/* <Link
                                    href="/creative"
                                    className="ml-24 mt-10 block"
                                >
                                    <svg
                                        width={300}
                                        height={100}
                                        className="group hover:blur-none xdrop-shadow-md hover:drop-shadow-xl transition-all"
                                    >
                                        <polygon
                                            shapeRendering="crispEdges"
                                            vectorEffect="non-scaling-stroke"
                                            points="0,0 260,0 300,40 300,100 200,100 190,90 100,90 90,100 40,100 0,60"
                                            className="fill-black transition-all xstroke-2 stroke-gray-400 group-hover:stroke-black"
                                        />
                                        <text
                                            x="80"
                                            y="57"
                                            fill="white"
                                            className="text-3xl group-hover:fill-red-600 transition-all"
                                        >
                                            CREATIVE
                                        </text>
                                    </svg>
                                </Link> */}
                                <Link
                                    href="/music"
                                    className="ml-24 mt-10 block"
                                >
                                    <svg
                                        width={300}
                                        height={100}
                                        className="group hover:blur-none xdrop-shadow-md hover:drop-shadow-xl transition-all"
                                    >
                                        <polygon
                                            shapeRendering="crispEdges"
                                            vectorEffect="non-scaling-stroke"
                                            points="0,0 260,0 300,40 300,100 200,100 190,90 100,90 90,100 40,100 0,60"
                                            className="fill-black transition-all xstroke-2 stroke-gray-400 group-hover:stroke-black"
                                        />
                                        <text
                                            x="110"
                                            y="57"
                                            fill="white"
                                            className="text-3xl group-hover:fill-red-600 transition-all"
                                        >
                                            MUSIC
                                        </text>
                                    </svg>
                                </Link>
                            </div>
                        </section>
                        {/* <div className="ml-auto m-2">
                            Contact{" "}
                            <RiFlashlightFill className="inline text-xs" />{" "}
                            Something{" "}
                            <RiFlashlightFill className="inline text-xs" />{" "}
                            Other
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
