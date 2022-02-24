import {
    RiFacebookBoxLine,
    RiInstagramLine,
    RiLinkedinBoxLine,
    RiTwitterLine,
} from "react-icons/ri"

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 xsm:border-l-2 xsm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} Samuel Beard
                </p>
                {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500">
                        <RiFacebookBoxLine className="w-5 h-5" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <RiTwitterLine className="w-5 h-5" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <RiInstagramLine className="w-5 h-5" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <RiLinkedinBoxLine className="w-5 h-5" />
                    </a>
                </span> */}
            </div>
        </footer>
    )
}
