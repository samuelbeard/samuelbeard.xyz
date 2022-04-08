import { FC } from "react"
import Link from "next/link"
import { RiHomeLine, RiMusic2Line, RiQuillPenLine } from "react-icons/ri"

const Header: FC = () => {
    return (
        <header className="section">
            <div className="container h-20 flex items-center">
                <div className="rounded-lg border-2 flex p-1">
                    <Link href="/">
                        <a className="p-1 rounded hover:bg-slate-400 mx-1 my-1">
                            <RiHomeLine className="w-6 h-6" />
                        </a>
                    </Link>
                    {/* <Link href="/">
                        <a className="p-1 rounded hover:bg-slate-400 mx-1 my-1">
                            <RiMusic2Line className="w-6 h-6" />
                        </a>
                    </Link> */}
                    <Link href="/writing">
                        <a className="p-1 rounded hover:bg-slate-400 mx-1 my-1">
                            <RiQuillPenLine className="w-6 h-6" />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
