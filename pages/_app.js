import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                async
                defer
                data-website-id="9a6788da-cd88-4cb0-9855-835e8609d293"
                src="https://umami.samuelbeard.xyz/script.js"
            />
            <Head>
                <title>Samuel Beard</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
