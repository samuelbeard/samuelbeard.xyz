import { FC } from "react"
import Link from "next/link"
import { RiHomeLine, RiMusic2Line, RiQuillPenLine } from "react-icons/ri"

const Header: FC = () => {
    return (
        <header className="section">
            <div className="container h-20 flex items-center">
                <div className="rounded-lg border-2 border-slate-300 flex p-1">
                    <Link
                        className="p-1 rounded hover:bg-slate-300 mx-1 my-1"
                        href="/"
                    >
                        <RiHomeLine className="w-6 h-6 text-slate-600 dark:text-slate-100" />
                    </Link>
                    <Link
                        className="p-1 rounded hover:bg-slate-300 mx-1 my-1"
                        href="/music"
                    >
                        <RiMusic2Line className="w-6 h-6 text-slate-600 dark:text-slate-100" />
                    </Link>
                    <Link
                        className="p-1 rounded hover:bg-slate-300 mx-1 my-1"
                        href="/writing"
                    >
                        <RiQuillPenLine className="w-6 h-6 text-slate-600 dark:text-slate-100" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
