import Head from "next/head"
import DaysGrid from "../components/DaysGrid"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DaysPage() {
    return (
        <div className="page">
            <Head>
                <title>Days | Samuel Beard</title>
            </Head>
            <Header />
            <h1 className="h1 mx-auto mt-10 mb-5">
                Every day of my life <span className="h4">so far</span>
            </h1>
            <DaysGrid />
            <Footer className="mt-24" />
        </div>
    )
}
