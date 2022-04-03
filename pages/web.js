import Footer from "../components/Footer"
import Header from "../components/Header"
import {
    RiCheckFill,
    RiEditFill,
    RiGlobalLine,
    RiPagesLine,
    RiQuestionFill,
} from "react-icons/ri"
import ExtrasSection from "../components/WebPage/ExtrasSection"

export default function Page() {
    return (
        <div>
            <Header />
            <div className="bg-zinc-900 flex justify-center items-center flex-col py-12">
                <h1 className="font-bold text-4xl m-3 text-zinc-100">
                    Web Development Packages
                </h1>
                <p className="mx-3 text-xl text-zinc-100">
                    To keep the costs low and simple. Choose from a set package.
                </p>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="max-w-xl pr-16 mx-auto mb-10">
                        <h5 className="mb-6 text-3xl font-extrabold leading-none">
                            Static brochure site up and running to get your
                            business online.
                        </h5>
                        <h5 className="mb-6 text-3xl font-extrabold leading-none text-zinc-500">
                            &pound;150 <span className="text-xl">/ month</span>
                        </h5>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                // className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-lg hover:shadow-xl bg-violet-500 hover:bg-zinc-900 focus:outline-none"
                                className="cta-btn text-base"
                            >
                                Get started
                            </button>
                            {/* <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a> */}
                        </div>
                    </div>
                    <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-zinc-700">
                                <RiPagesLine className="w-8 h-8 text-zinc-700" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Three pages
                            </h6>
                            <p className="text-sm text-gray-700">
                                All the pages you need to get your business
                                online. A converting landing page, an about page
                                to engage potential clients and a contact page.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-zinc-700">
                                <RiGlobalLine className="w-8 h-8 text-zinc-700" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Hosted
                            </h6>
                            <p className="text-sm text-gray-700">
                                Your website is hosted on a global CDN (Content
                                distribution network) meaning it loads fast from
                                anywhere in the world.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-zinc-700">
                                <RiEditFill className="w-8 h-8 text-zinc-700" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Unlimited revisions*
                            </h6>
                            <p className="text-sm text-gray-700">
                                Don't worry about getting things perfect right
                                away. As we learn more about how people use your
                                website, we can refine it for the best
                                performance over time.
                            </p>
                        </div>
                        {/* <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-zinc-700">
                                <RiQuestionFill className="w-8 h-8 text-zinc-700" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                A fourth thing
                            </h6>
                            <p className="text-sm text-gray-700">
                                Something else will go here.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            <ExtrasSection />
            <div className="w-4/5 sm:max-w-4xl mx-auto my-24">
                <p>
                    * As we learn more about how your site is being used, we can
                    make changes to text, images and other parts of the site to
                    better serve those visitors. Large changes such as page
                    section changes, new pages and features aren't included
                    here.
                </p>
            </div>
            {/* <GallerySection /> */}
            <Footer />
        </div>
    )
}
