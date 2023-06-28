import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Samuel Beard</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
