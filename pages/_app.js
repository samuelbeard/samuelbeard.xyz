import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Samuel Beard - Digital Designer</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
