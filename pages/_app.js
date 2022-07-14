import "../styles/globals.css"
import Head from "next/head"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy='lazyOnload' async defer data-website-id="021322d0-6be5-4a55-b937-82559d5e9a69" src="https://umami-production-1d5f.up.railway.app/umami.js"></Script>
            <Head>
                <title>Samuel Beard</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
