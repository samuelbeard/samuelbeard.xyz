import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NextPage } from "next"
import Link from "next/link"
import SidebarDecoration from "../components/SidebarDecoration"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuel Beard</title>
            </Head>
            <SidebarDecoration />
            <div className="min-h-screen xw-screen xflex pl-[150px]">
                <div className="px-5">
                    <div className="pl-10 flex flex-col justify-between h-screen">
                        <section className="flex-grow flex flex-col justify-center">
                            <div className="xpl-10">
                                <h1 className="h1 text-3xl sm:text-8xl m-0">
                                    Samuel
                                    <span className="text-red-600">_</span>Beard
                                </h1>
                                <h2 className="h2 font-sans text-2xl font-normal m-0 mt-2">
                                    Web Developer &amp; Software Developer
                                </h2>
                                <div className="landing-links">
                                    <Link href="/projects">PROJECTS</Link>
                                    <Link href="/creative">CREATIVE</Link>
                                    <Link href="/knowledge">
                                        KNOWLEDGE BASE
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <div className="ml-auto m-2">
                            Contact | Something | Other
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
