import Link from "next/link"

const HomeLink = ({ href, animationDelay, children }) => {
    return (
        <div className="w-full pt-3 pl-3 pr-3 md:h-full md:w-1/3 md:py-3 md:pr-0">
            <Link
                href={href}
                className="animate-in flex h-full items-center justify-center overflow-hidden rounded-xl bg-emerald-600 p-7 transition-all hover:bg-opacity-80"
                style={{ animationDelay: animationDelay }}
            >
                {children}
            </Link>
        </div>
    )
}

export default HomeLink
