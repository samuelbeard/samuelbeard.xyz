import { NextPage } from "next"
import Header from "@/components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import photos from "../content/photography.json"
import Image from "next/image"

const Photography: NextPage = () => {
    return (
        <div className="page">
            <Head>
                <title>Photography</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container mt-12 lg:w-10/12">
                    <div className="xmasonry-container grid grid-cols-2 gap-5">
                        {photos?.map(pic => {
                            return (
                                <div
                                    key={pic.title}
                                    className="xmasonry-brick rounded-sm bg-white p-2"
                                >
                                    <Image
                                        width={pic.width}
                                        height={pic.height}
                                        src={`/img/photography/${pic.image}`}
                                        alt={pic.title}
                                        className="w-full flex-auto rounded-sm"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Photography
