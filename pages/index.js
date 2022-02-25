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
    RiCheckFill,
} from "react-icons/ri"
import { MdSupport } from "react-icons/md"
import HandleItem from "../components/HandleItem"

export default function Home() {
    return (
        <div>
            <div className="bg-amber-500 flex justify-center items-center flex-col py-12 sm:py-36">
                <h1 className="h1 text-3xl sm:text-7xl m-0 text-white">
                    Samuel Beard
                </h1>
                <h2 className="h2 text-xl sm:text-3xl m-0 text-zinc-900">
                    Digital Designer
                </h2>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col">
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-gray-900 font-bold title-font text-4xl mb-2 sm:mb-0">
                                Web Development
                            </h1>
                            <p class="sm:w-3/5 leading-relaxed sm:pl-10 pl-0 sm:text-right text-2xl">
                                Clean, simple websites that convert.
                            </p>
                        </div>
                        <p class="leading-relaxed text-base mb-3">
                            I build websites with three goals in mind:
                        </p>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden bg-zinc-100 p-5 shadow-lg">
                                <img
                                    alt="content"
                                    class="w-full rounded-lg"
                                    src="/img/undraw_growth_curve.svg"
                                />
                            </div>
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
                            <div class="rounded-lg h-64 overflow-hidden bg-zinc-100 p-5 shadow-lg">
                                <img
                                    alt="content"
                                    class="w-full rounded-lg"
                                    src="/img/undraw_search.svg"
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
                            <div class="rounded-lg h-64 overflow-hidden bg-zinc-100 p-5 shadow-lg">
                                <img
                                    alt="content"
                                    class="w-full rounded-lg"
                                    src="/img/undraw_web_devices.svg"
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
                <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-coolGray-900">
                            <div className="flex space-x-2 sm:space-x-4">
                                <RiCheckFill className="flex-shrink-0 w-6 h-6" />
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">
                                        Blogs
                                    </p>
                                    <p className="leading-snug">
                                        Add a blog to engage your audience and
                                        build a reputation for
                                        your&nbsp;business.
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <RiCheckFill className="flex-shrink-0 w-6 h-6" />
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">
                                        Ecommerce
                                    </p>
                                    <p className="leading-snug">
                                        Build a store that is fast, efficient,
                                        and easy to use.
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <RiCheckFill className="flex-shrink-0 w-6 h-6" />
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">
                                        Automation
                                    </p>
                                    <p className="leading-snug">
                                        Automate repetative tasks such as email,
                                        support and data collection.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 bg-none">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <img
                                    src="/img/undraw_website_builder.svg"
                                    alt=""
                                    className="rounded-lg shadow-lg aspect-video sm:min-h-96 bg-zinc-100 p-5"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                            <h1 class="text-2xl font-bold title-font mb-2 text-gray-900">
                                We can handle
                            </h1>
                        </div>
                        <div class="flex flex-wrap -m-4">
                            <HandleItem
                                title="Design"
                                icon={
                                    <RiPaintBrushFill class="text-white w-6 h-6" />
                                }
                            />
                            <HandleItem
                                title="Build"
                                icon={
                                    <RiToolsFill class="text-white w-6 h-6" />
                                }
                            />
                            <HandleItem
                                title="Hosting"
                                icon={
                                    <RiServerFill class="text-white w-6 h-6" />
                                }
                            />
                            <HandleItem
                                title="Deployment"
                                icon={
                                    <RiGlobalLine class="text-white w-6 h-6" />
                                }
                            />
                            <HandleItem
                                title="Maintenance"
                                icon={
                                    <RiCalendarFill class="text-white w-6 h-6" />
                                }
                            />
                            <HandleItem
                                title="Support"
                                icon={<MdSupport class="text-white w-6 h-6" />}
                            />
                        </div>
                    </div>
                </section>
                <div className="w-full flex justify-center items-center mt-24 mb-24">
                    <Link href="/web">
                        <a className="cta-btn">Web Development Packages</a>
                    </Link>
                </div>
            </section>
            {/* <GallerySection /> */}
            <Footer />
        </div>
    )
}
