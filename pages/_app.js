import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                async
                src="https://umami.samuelbeard.xyz/script.js"
                data-website-id="05096cc0-0f3a-4062-b748-bcae1992d3d9"
            ></Script>
            <Head>
                <title>Samuel Beard</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
