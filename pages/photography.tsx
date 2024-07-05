import { NextPage } from "next"
import Header from "@/components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import photos from "../content/photography.json"
import Image from "next/image"
import Photo from "../components/Photo"

const Photography: NextPage = () => {
    return (
        <div className="page">
            <Head>
                <title>Photography</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container mt-12 mb-12 lg:w-10/12">
                    <div className="grid gap-2 md:grid-cols-2">
                        {photos?.map(pic => (
                            <Photo
                                key={pic.title}
                                image={pic.image}
                                title={pic.title}
                                height={pic.height}
                                width={pic.width}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Photography
