export default function GallerySection() {
    return (
        <div className="mt-5 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        Past projects &ndash; big and small
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
                {/* <p className="text-gray-700 lg:text-sm lg:max-w-md">
                    "Class is dead", says Foucault; however, according to
                    Reicher, it is not so much class that is dead, but rather
                    the absurdity, and some would say the paradigm, of class.
                    However, the subject is interpolated into a
                    postpatriarchialist dialectic theory that includes
                    consciousness as a totality.
                </p> */}
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="/img/wbc.png"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Women's Business Club
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Painted between 1503 and 1517, Da Vinci’s
                                alluring portrait has been dogged by two
                                questions since the day it was made: Who’s the
                                subject and why is she smiling?
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                The Starry Night
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Vincent Van Gogh’s most popular painting, The
                                Starry Night was created by Van Gogh at the
                                asylum in Saint-Rémy, where he’d committed
                                himself in 1889.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                The Kiss
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Opulently gilded and extravagantly patterned,
                                The Kiss, Gustav Klimt’s fin-de-siècle portrayal
                                of intimacy, is a mix of Symbolism and Vienna
                                Jugendstil, the Austrian variant of Art Nouveau.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                The Harvesters
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Bruegel’s fanfare for the common man is
                                considered one of the defining works of Western
                                art. This composition was one of six created on
                                the theme of the seasons.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    View gallery
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    )
    return (
        <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img
                    src="https://source.unsplash.com/random/301x301/"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500 aspect-square"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?0"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?1"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?2"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?3"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?4"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?5"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?6"
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                    src="https://source.unsplash.com/random/200x200/?7"
                />
                <img
                    src="https://source.unsplash.com/random/302x302/"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500 aspect-square"
                />
            </div>
        </section>
    )

    return (
        <section className="text-gray-600 body-font bg-amber-100 mt-24">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full px-10 relative mb-4">
                        <img
                            alt="gallery"
                            className="w-full h-full object-center block rounded"
                            src="/img/wbc.png"
                        />
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img
                                    alt="gallery"
                                    className="rounded w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                    src="/img/wbc.png"
                                />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                                        Shooting Stars
                                    </h2>
                                    <p className="leading-relaxed">
                                        Skateboard +1 mustache fixie paleo
                                        lumbersexual.
                                    </p>
                                    <a className="mt-3 text-amber-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img
                                    alt="gallery"
                                    className="rounded w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                    src="https://dummyimage.com/542x420"
                                />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                                        Shooting Stars
                                    </h2>
                                    <p className="leading-relaxed">
                                        Skateboard +1 mustache fixie paleo
                                        lumbersexual.
                                    </p>
                                    <a className="mt-3 text-amber-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
