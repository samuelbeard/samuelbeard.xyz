import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="text-gray-500 text-center my-3">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Samuel Beard
            </p>
        </footer>
    )
}

export default Footer
