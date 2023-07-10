import { FC } from "react"
import Link from "next/link"
import { RiHomeLine, RiMusic2Line, RiProfileLine, RiQuillPenLine, RiUser3Line } from "react-icons/ri"

const Header: FC = () => {
    return (
        <>
            <header className="flex max-w-screen overflow-hidden bg-gradient-to-r from-black via-gray-800 to-black">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between xmax-w-full xw-1/2 mx-auto  flex-grow">
                        <div className="text-white">
                            <Link className="rounded xhover:blur-sm hover:scale-x-50 transition-all" href="/">
                                <h1 className="glitch hover:tracking-wide transition-all">Samuel Beard</h1>
                            </Link>
                        </div>
                        <div className="rounded-sm flex p-1">
                            <Link className="p-1 hover:animate-pulse mx-1 my-1 transition-all text-white" href="/creative/days">
                                CREATIVE
                            </Link>
                            <Link className="p-1 hover:animate-pulse mx-1 my-1 transition-all text-white" href="/blog">
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
