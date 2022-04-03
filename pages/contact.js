import Footer from "../components/Footer"
import Header from "../components/Header"
import {
    RiCheckFill,
    RiEditFill,
    RiGlobalLine,
    RiPagesLine,
    RiQuestionFill,
} from "react-icons/ri"
import ExtrasSection from "../components/WebPage/ExtrasSection"
import ContactForm from "../components/ContactForm"

export default function Page() {
    return (
        <div>
            <Header />
            <div className="bg-zinc-900 flex justify-center items-center flex-col py-12">
                <h1 className="font-bold text-4xl m-3 text-zinc-100">
                    Send me a message
                </h1>
                {/* <p className="mx-3 text-xl text-zinc-100">
                    To keep the costs low and simple. Choose from a set package.
                </p> */}
            </div>
            <div className="w-4/5 md:w-2/5 mx-auto my-12">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}
