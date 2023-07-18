import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
    return (
        <>
            <header className="max-w-screen flex overflow-hidden bg-gradient-to-r from-black via-gray-800 to-black">
                <div className="container mx-auto">
                    <div className="xmax-w-full xw-1/2 mx-auto flex flex-grow items-center  justify-between">
                        <div className="text-white">
                            <Link
                                className="xhover:blur-sm rounded transition-all hover:scale-x-50"
                                href="/"
                            >
                                <h1 className="glitch transition-all hover:tracking-wide">
                                    Samuel Beard
                                </h1>
                            </Link>
                        </div>
                        <div className="flex rounded-sm p-1">
                            <Link
                                className="mx-1 my-1 p-1 text-white transition-all hover:animate-pulse"
                                href="/creative/days"
                            >
                                CREATIVE
                            </Link>
                            <Link
                                className="mx-1 my-1 p-1 text-white transition-all hover:animate-pulse"
                                href="/blog"
                            >
                                BLOG
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
