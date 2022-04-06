import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
    return (
        <div className="page bg-slate-50 dark:bg-slate-800">
            <Head>
                <title>Samuel Beard</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container lg:w-2/5 max-w-4xl">
                    <h1 className="h1 text-3xl sm:text-5xl m-0 dark:text-white">
                        Samuel Beard
                    </h1>
                    <p className="para mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Praesentium deserunt saepe maiores, ab natus animi
                        iusto tenetur quo ipsa aperiam? Pariatur eum possimus
                        rerum. Autem nesciunt officia assumenda! Incidunt, quo.
                    </p>
                </div>
            </section>
            <p>as</p>
        </div>
    )
}
