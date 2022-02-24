import { ServerIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import FeaturesSection from "../components/Sections/FeaturesSection"
import GallerySection from "../components/Sections/GallerySection"
import GraphicDesignSection from "../components/Sections/GraphicDesignSection"
import WebDesignSection from "../components/Sections/WebDesignSection"
import WebDevSection from "../components/Sections/WebDevSection"
import {
    RiCalendarFill,
    RiGlobeLine,
    RiPaintBrushFill,
    RiServerFill,
    RiToolsFill,
    RiGlobalLine,
} from "react-icons/ri"

export default function Home() {
    return (
        <div>
            <div className="bg-amber-500 flex justify-center items-center flex-col py-36">
                <h1 className="h1 text-7xl m-0 text-white">Samuel Beard</h1>
                <h2 className="h2 m-0 text-violet-800">Digital Designer</h2>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col">
                        {/* <div class="h-1 bg-gray-200 rounded overflow-hidden">
                            <div class="w-24 h-full bg-violet-800"></div>
                        </div> */}
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-gray-900 font-bold title-font text-4xl mb-2 sm:mb-0">
                                Web Development
                            </h1>
                            <p class="sm:w-3/5 leading-relaxed sm:pl-10 pl-0 text-right text-2xl">
                                Clean, simple websites that convert.
                            </p>
                        </div>
                        <p class="leading-relaxed text-base mb-3">
                            I build websites with three goals in mind:
                        </p>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <img
                                alt="content"
                                class="w-full rounded-lg"
                                src="https://placehold.co/800x600"
                            />
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                                Convert
                            </h2>
                            <p class="text-base leading-relaxed mt-2">
                                Whatever you are selling, the website will guide
                                potential customers to it and give them the
                                information and confidence to purchase.
                            </p>
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    class="w-full rounded-lg"
                                    src="https://placehold.co/800x600"
                                />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                                SEO (Search Engine Optimisation)
                            </h2>
                            <p class="text-base leading-relaxed mt-2">
                                The website will be built in such a way that it
                                can rank highly in search engines. Thus
                                attracting the right customers.
                            </p>
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    class="w-full rounded-lg"
                                    src="https://placehold.co/800x600"
                                />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                                Fast and responsive
                            </h2>
                            <p class="text-base leading-relaxed mt-2">
                                The website will be fast and look great on any
                                device. Reducing friction for a visitor and
                                increasing conversions.
                            </p>
                        </div>
                    </div>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                            <h1 class="text-2xl font-bold title-font mb-2 text-gray-900">
                                We can handle
                            </h1>
                        </div>
                        <div class="flex flex-wrap -m-4">
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                                        <RiPaintBrushFill class="text-white w-6 h-6" />
                                    </div>
                                    <h2 class="text-lg text-white font-bold title-font mb-0">
                                        Design
                                    </h2>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                                        <RiToolsFill class="text-white w-6 h-6" />
                                    </div>
                                    <h2 class="text-lg text-white font-bold title-font mb-0">
                                        Build
                                    </h2>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                                        <RiServerFill class="text-white w-6 h-6" />
                                    </div>
                                    <h2 class="text-lg text-white font-bold title-font mb-0">
                                        Hosting
                                    </h2>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                                        <RiGlobalLine class="text-white w-6 h-6" />
                                    </div>
                                    <h2 class="text-lg text-white font-bold title-font mb-0">
                                        Deployment
                                    </h2>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                                        <RiCalendarFill class="text-white w-6 h-6" />
                                    </div>
                                    <h2 class="text-lg text-white font-bold title-font mb-0">
                                        Maintenance
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full flex justify-center items-center mt-24">
                    <Link href="/web">
                        <a className="py-3 px-6 text-xl bg-violet-500 text-white rounded-full shadow hover:bg-violet-600 transition-all">
                            Web Development Packages
                        </a>
                    </Link>
                </div>
            </section>
            {/* <WebDevSection /> */}
            {/* <Hero /> */}
            {/* <Header /> */}
            {/* <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://dummyimage.com/720x600"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Before they sold out
                            <br className="hidden lg:inline-block" />
                            readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                                Button
                            </button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <FeaturesSection /> */}
            {/* <WebDesignSection /> */}
            {/* <GraphicDesignSection /> */}
            {/* <GallerySection /> */}
            <Footer />
            {/* <div className="background h-screen w-screen bg-slate-600 flex justify-center items-center flex-col">
                <h1 className="text-slate-200 text-6xl font-bold uppercase">
                    Samuel Beard
                </h1>
                <h2 className="text-slate-400 text-2xl font-semibold">
                    I'll get around to building something here soon...
                </h2>
            </div> */}
        </div>
    )
}
