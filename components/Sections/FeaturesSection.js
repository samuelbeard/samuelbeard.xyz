/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: "Website Design", description: "Designed by Good Goods, Inc." },
    {
        name: "Mobile App Design",
        description:
            "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Brand Identity", description: '6.25" x 3.55" x 1.15"' },
    {
        name: "Finish",
        description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
        name: "Considerations",
        description:
            "Made from natural materials. Grain and color vary with each item.",
    },
]

export default function FeaturesSection() {
    return (
        <div className="bg-amber-50">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
                <div>
                    {/* <h2 className="text-3xl font-semibold tracking-tight text-stone-700 sm:text-4xl">
                        Services I Offer
                    </h2> */}
                    {/* <p className="mt-4 text-stone-600">
                        The walnut wood card tray is precision milled to
                        perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or
                        can be used to archive important task lists.
                    </p> */}
                    <div className="bg-none border-stone-700 px-8 py-3">
                        <h2 className="h2 text-stone-800">Website Design</h2>
                        <p className="text-stone-600">
                            I focus on the main goal of why you need a website
                            first and foremost. It's great when a website looks
                            good but if it doesn't convert, it's not doing its
                            job.
                        </p>
                        <p className="text-stone-600 pt-3">
                            My sites still look good too.
                        </p>
                    </div>
                    <div className="bg-none border-stone-700 px-8 py-3">
                        <h2 className="h2 text-stone-800">Brand Identity</h2>
                        <p className="text-stone-600">
                            Creating an identity for your business that connects
                            with your clientele.
                        </p>
                    </div>
                    <div className="bg-none border-stone-700 px-8 py-3">
                        <h2 className="h2 text-stone-800">Web Development</h2>
                        <p className="text-stone-600 pt-3">
                            Let's go further than a brochure website. I build
                            Blogs, Stores and custom web apps to build your
                            business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className="bg-amber-400">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-stone-700 sm:text-4xl">
                        Services I Offer
                    </h2>
                    {/* <p className="mt-4 text-stone-600">
                        The walnut wood card tray is precision milled to
                        perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or
                        can be used to archive important task lists.
                    </p> */}

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map(feature => (
                            <div
                                key={feature.name}
                                className="border-t border-stone-600 pt-4"
                            >
                                <dt className="font-medium text-stone-700">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-stone-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}
