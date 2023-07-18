import Link from "next/link"

const HomeLink = ({ href, title, className, textOffset }) => {
    return (
        <Link href={href} className={`${className} mt-10 block`}>
            <svg
                width={300}
                height={100}
                className="xdrop-shadow-md group transition-all hover:blur-none hover:drop-shadow-xl"
            >
                <defs>
                    <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            style={{
                                stopColor: "#0f172a",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset="100%"
                            style={{
                                stopColor: "#334155",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <polygon
                    fill="url(#grad1)"
                    shapeRendering="crispEdges"
                    vectorEffect="non-scaling-stroke"
                    points="0,0 260,0 300,40 300,100 200,100 190,90 100,90 90,100 40,100 0,60"
                    className="fxill-red-600 transition-all"
                />
                <text
                    x={textOffset}
                    y="57"
                    fill="white"
                    className="text-3xl transition-all group-hover:fill-black"
                >
                    {title}
                </text>
            </svg>
        </Link>
    )
}

export default HomeLink
