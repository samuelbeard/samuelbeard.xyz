import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="text-gray-500 text-center mb-3 mt-6">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Samuel Beard
            </p>
        </footer>
    )
}

export default Footer
