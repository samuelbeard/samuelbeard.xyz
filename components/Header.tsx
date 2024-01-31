import { FC } from "react"
import Link from "next/link"
import { GiHolyHandGrenade } from "react-icons/gi"

const Header: FC = () => {
    return (
        <header className="h-14x flex h-20 items-center p-3 text-zinc-900">
            <div className="flex h-full w-full items-center justify-between rounded-xl bg-white px-4 sm:justify-center sm:px-7">
                <Link href="/">
                    <h1 className="font-bold sm:mx-5">Samuel&nbsp;Beard</h1>
                </Link>
                <GiHolyHandGrenade className="mr-2" />
                <div>
                    <Link
                        href="/blog"
                        className="mx-1 hover:underline hover:opacity-50 sm:mx-2"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/creative"
                        className="mx-1 hover:underline hover:opacity-50 sm:mx-2"
                    >
                        Creative
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
