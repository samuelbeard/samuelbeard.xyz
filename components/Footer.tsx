import { FC } from "react"

interface Props {
    className?: string
}

const Footer: FC<Props> = ({ className }) => {
    return (
        <footer
            className={`mb-3 mt-6 text-center text-slate-500 dark:text-slate-400 ${className}`}
        >
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Samuel Beard
            </p>
            <a
                className="mx-auto text-sm underline"
                href="https://www.digitalocean.com/?refcode=e549c3f0093b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
            >
                Powered by Digital Ocean
            </a>
        </footer>
    )
}

export default Footer
