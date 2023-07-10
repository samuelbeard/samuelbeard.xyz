import Head from "next/head"
import DaysGrid from "../../components/DaysGrid"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DaysPage() {
    return (
        <div className="page">
            <Head>
                <title>Days | Samuel Beard</title>
            </Head>
            <Header />
            <div className="mx-auto mt-10 mb-5 text-center">
                <h1 className="h1">
                    Every day of my life <span className="h4">so far</span>
                </h1>
                <p>Every dot in the grid below represents a day of my life so far. And each icon is a significant day.</p>
            </div>
            <DaysGrid />
            <Footer className="pt-24" />
        </div>
    )
}
