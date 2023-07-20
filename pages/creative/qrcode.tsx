import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import QrCodeGenerator from "../../components/QrCodeGenerator"

export default function QrCodePage() {
    return (
        <div className="page">
            <Head>
                <title>Qr Code Generator | Samuel Beard</title>
            </Head>
            <Header />
            <div className="mx-auto w-full overflow-hidden md:w-8/12">
                <QrCodeGenerator />
            </div>
            <Footer />
        </div>
    )
}
