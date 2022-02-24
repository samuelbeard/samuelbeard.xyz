import Footer from "../components/Footer"
import Header from "../components/Header"
import {
    RiCheckFill,
    RiEditFill,
    RiGlobalLine,
    RiPagesLine,
    RiQuestionFill,
} from "react-icons/ri"

export default function Page() {
    return (
        <div>
            <Header />
            <div className="bg-zinc-900 flex justify-center items-center flex-col py-12">
                <h1 className="font-bold text-4xl m-3 text-zinc-100">
                    Web Development Packages
                </h1>
                <p className="m-0 text-xl text-zinc-100">
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
                        {/* <p className="mb-6 text-gray-900">
                            Website designed and built that is the HQ of your
                            brands web presence.
                        </p> */}
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-lg hover:shadow-xl bg-violet-500 hover:bg-zinc-900 focus:outline-none"
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
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-zinc-700">
                                <RiQuestionFill className="w-8 h-8 text-zinc-700" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                A fourth thing
                            </h6>
                            <p className="text-sm text-gray-700">
                                Something else will go here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-amber-50">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            Add features from here
                        </h2>
                        <p className="mt-4 text-lg dark:text-coolGray-400">
                            On top of the basic package, at any time, you can
                            add more features to your website.
                        </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Blog</dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Vivamus ultricies bibendum tortor, molestie
                                    imperdiet justo cursus eu. Donec quis arcu
                                    magna. Integer tempor egestas dolor.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Ecommerce store
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Quisque ultricies volutpat sapien nec
                                    varius. Sed sit amet justo vestibulum,
                                    efficitur risus quis, gravida libero.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    CRM integration
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Phasellus nec molestie arcu. Proin dictum,
                                    lorem mollis rutrum efficitur, lectus velit
                                    pharetra elit, et dictum purus nibh auctor
                                    velit.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Contact forms
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Sed ornare ultricies gravida. Morbi egestas
                                    dolor turpis, ornare laoreet est vehicula
                                    non.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Questionaire
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Lorem mollis rutrum efficitur, lectus velit
                                    pharetra elit, et dictum purus nibh auctor
                                    velit.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Automation
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Cras a mauris tincidunt, scelerisque justo
                                    sit amet, hendrerit est. Fusce venenatis
                                    diam fringilla metus convallis, at dapibus
                                    enim congue.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Booking system
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Curabitur molestie neque ac massa pulvinar,
                                    nec sollicitudin nunc consequat. Donec
                                    mattis orci eros, vitae porttitor risus
                                    pretium eget.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <RiCheckFill className="flex-shrink-0 w-6 h-6 text-amber-500" />
                            <div className="ml-3">
                                <dt className="text-lg font-medium">
                                    Anything else
                                </dt>
                                <dd className="mt-2 dark:text-coolGray-400">
                                    Need something specific for your business?
                                    No problem.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="max-w-4xl mx-auto my-24">
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
