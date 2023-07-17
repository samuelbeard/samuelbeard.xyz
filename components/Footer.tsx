import { FC } from "react"

interface Props {
    className?: string
}

const Footer: FC<Props> = ({ className }) => {
    return (
        <footer
            className={`text-slate-500 dark:text-slate-400 text-center mb-3 mt-6 ${className}`}
        >
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Samuel Beard
            </p>
            <a
                className="mx-auto underline text-sm"
                href="https://www.digitalocean.com/?refcode=e549c3f0093b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
            >
                Powered by Digital Ocean
                {/* <img
                    src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
                    alt="DigitalOcean Referral Badge"
                /> */}
            </a>
        </footer>
    )
}

export default Footer
