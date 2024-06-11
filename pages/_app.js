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
            <Script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "5189cc4f26d945c682a921ecdca2fa27"}'
            ></Script>
            <Head>
                <title>Samuel Beard</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />

                <meta property="og:url" content="https://samuelbeard.xyz" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samuel Beard" />
                <meta property="og:description" content="undefined" />
                <meta property="og:image" content="" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="samuelbeard.xyz" />
                <meta
                    property="twitter:url"
                    content="https://samuelbeard.xyz"
                />
                <meta name="twitter:title" content="Samuel Beard" />
                <meta name="twitter:description" content="undefined" />
                <meta name="twitter:image" content="" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
