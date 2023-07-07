import { FC } from "react"
import Link from "next/link"
import {
    RiHomeLine,
    RiMusic2Line,
    RiProfileLine,
    RiQuillPenLine,
    RiUser3Line,
} from "react-icons/ri"

const Header: FC = () => {
    return (
        <>
            <header className="xbg-black flex">
                <div className="w-[200px]">
                    <svg height={50}>
                        <polygon points="0,0 200,0 200,50, 150,50 145,45 55,45 50,50 0,50" />
                    </svg>
                </div>
                <div className="flex items-center justify-between xmax-w-full xw-1/2 mx-auto bg-black flex-grow">
                    <div className="text-white">
                        <Link
                            className="rounded xhover:blur-sm hover:scale-x-50 transition-all"
                            href="/"
                        >
                            <h1 className="glitch hover:scale-x-125 transition-all">
                                Samuel Beard
                            </h1>
                        </Link>
                    </div>
                    <div className="rounded-sm flex p-1">
                        <Link
                            className="p-1 rounded hover:animate-spin mx-1 my-1 transition-all"
                            href="/music"
                        >
                            <RiMusic2Line className="w-6 h-6 text-slate-100 dark:text-slate-100" />
                        </Link>
                        <Link
                            className="p-1 rounded hover:-rotate-12 hover:animate-ping mx-1 my-1 transition-all text-white"
                            href="/blog"
                        >
                            BLOG
                        </Link>
                    </div>
                </div>
                <div className="w-[200px]">
                    <svg height={50}>
                        <polygon points="0,0 200,0 200,40, 60,40 50,50 0,50" />
                    </svg>
                </div>
            </header>
        </>
    )
}

export default Header
