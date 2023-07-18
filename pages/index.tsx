import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NextPage } from "next"
import Link from "next/link"
import SidebarDecoration from "../components/SidebarDecoration"
import { RiCheckboxBlankCircleFill, RiFlashlightFill } from "react-icons/ri"
import { Suspense } from "react"
import HomeLink from "../components/HomeLink"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuel Beard</title>
            </Head>
            <SidebarDecoration />
            <div className="min-h-screen sm:pl-[150px]">
                <div className="px-2 sm:px-5">
                    <div className="flex h-screen flex-col justify-between sm:pl-10">
                        <section className="flex flex-grow flex-col justify-center">
                            <div className="xpl-10">
                                <h1 className="glitch font-display text-3xl text-slate-900 sm:text-5xl lg:text-8xl">
                                    <span>Samuel Beard</span>
                                    Samuel_Beard
                                    <span>Samuel Beard</span>
                                </h1>
                                <h2 className="h2 m-0 mt-0 font-sans text-2xl font-normal">
                                    Web&nbsp;Developer &amp;
                                    Software&nbsp;Developer
                                </h2>
                                <HomeLink
                                    href="/blog"
                                    title="BLOG"
                                    className=""
                                    textOffset={115}
                                />
                                <HomeLink
                                    href="/creative/days"
                                    title="CREATIVE"
                                    className="ml-12"
                                    textOffset={85}
                                />
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
