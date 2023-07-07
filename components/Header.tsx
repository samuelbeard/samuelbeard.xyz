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
        <header className="border-b-2 border-stone-100">
            <div className="flex items-center justify-center w-full">
                <div className="rounded-sm flex p-1">
                    <Link
                        className="p-1 rounded hover:blur-sm mx-1 my-1 transition-all"
                        href="/"
                    >
                        <RiHomeLine className="w-6 h-6 text-slate-100 dark:text-slate-100" />
                    </Link>
                    <Link
                        className="p-1 rounded hover:animate-pulse mx-1 my-1 transition-all"
                        href="/me"
                    >
                        <RiUser3Line className="w-6 h-6 text-slate-100 dark:text-slate-100" />
                    </Link>
                    <Link
                        className="p-1 rounded hover:animate-spin mx-1 my-1 transition-all"
                        href="/music"
                    >
                        <RiMusic2Line className="w-6 h-6 text-slate-100 dark:text-slate-100" />
                    </Link>
                    <Link
                        className="p-1 rounded hover:-rotate-12 hover:animate-ping mx-1 my-1 transition-all"
                        href="/writing"
                    >
                        <RiQuillPenLine className="w-6 h-6 text-slate-100 dark:text-slate-100" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
