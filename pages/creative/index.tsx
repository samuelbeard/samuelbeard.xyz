import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function CreativePage() {
    return (
        <div className="page">
            <Head>
                <title>Days | Samuel Beard</title>
            </Head>
            <Header />
            <div className="mx-auto mt-10 mb-5 text-center">
                <h1 className="h1">Creative Things</h1>
            </div>
            <div className="mx-auto flex gap-10">
                <Link href="/creative/days" className="creative-link">
                    Every Day of my Life
                </Link>
                <Link href="/creative/qrcode" className="creative-link">
                    QR Generator
                </Link>
            </div>
            <Footer className="pt-24" />
        </div>
    )
}
