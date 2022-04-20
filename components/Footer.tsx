import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="text-slate-500 dark:text-slate-400 text-center mb-3 mt-6">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Samuel Beard
            </p>
        </footer>
    )
}

export default Footer
