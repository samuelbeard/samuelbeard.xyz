import { FC } from "react"

interface Props {
    className?: string
}

const Footer: FC<Props> = ({ className }) => {
    return (
        <footer className={`text-slate-500 dark:text-slate-400 text-center mb-3 mt-6 ${className}`}>
            <p className="text-sm">&copy; {new Date().getFullYear()} Samuel Beard</p>
        </footer>
    )
}

export default Footer
