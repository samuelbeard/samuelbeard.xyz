/* This example requires Tailwind CSS v2.0+ */
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon,
    MoonIcon
} from "@heroicons/react/outline"

const features = [
    {
        name: "Fast design and build",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: MoonIcon,
    },
    {
        name: "Domain and hosting",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: ScaleIcon,
    },
    {
        name: "Transfers are instant",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: LightningBoltIcon,
    },
    {
        name: "Mobile notifications",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: AnnotationIcon,
    },
]

export default function Example() {
    return (<>
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-amber-500 font-semibold tracking-wide uppercase">
                        Web Design
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Built to convert, maintenance covered.
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit.
                        Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map(feature => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-violet-500 text-white">
                                        <feature.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
        <section className="text-gray-600 body-font bg-stone-100">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                        <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-50 absolute inset-0 rounded"
                            src="https://source.unsplash.com/820x340"
                        />
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-2xl text-gray-900 font-extrabold title-font mb-2">
                                Shooting Stars
                            </h2>
                            <p className="leading-relaxed">
                                Skateboard +1 mustache fixie paleo lumbersexual.
                            </p>
                            <a className="mt-3 text-stone-200 inline-flex items-center bg-stone-900 py-3 px-6 rounded">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img
                                    alt="gallery"
                                    className="rounded w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                    src="https://dummyimage.com/542x460"
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
        </section></>
    )
}
