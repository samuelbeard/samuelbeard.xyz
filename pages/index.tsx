import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NextPage } from "next"

const Home: NextPage = () => {
    return (
        <div className="page bg-slate-200 dark:bg-slate-800">
            <Head>
                <title>Samuel Beard</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container lg:w-2/5 max-w-4xl">
                    <h1 className="h1 text-3xl sm:text-5xl m-0 text-slate-600 dark:text-white">
                        Samuel Beard
                    </h1>
                    <p className="para mt-6 text-slate-500 dark:text-slate-400">
                        Hello. My name is (see above) and I&apos;m a WEB
                        DEVELOPER.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
