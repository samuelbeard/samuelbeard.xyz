import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useState } from "react"

const entities = [
    ["excl", "#x00021", "#33"],
    ["quot", "#x00022", "#34"],
    ["num", "#x00023", "#35"],
    ["dollar"],
    ["percnt"],
    ["amp"],
    ["apos"],
    ["lpar"],
    ["rpar"],
    ["commat"],
    ["verbar"],
    ["pound"],
    ["copy"],
    ["deg"],
    ["dash"],
    ["ndash"],
    ["nbsp"],
    ["ZeroWidthSpace"],
    ["bull"],
    ["euro"],
]

export default function DaysPage() {
    return (
        <div className="page">
            <Head>
                <title>HTML Character Entities | Samuel Beard</title>
            </Head>
            <Header />
            <div className="mx-auto mt-10 mb-5 text-center">
                <h1 className="h1">HTML Character Entities</h1>
                <p>Click on the code to copy it to your clipboard.</p>
            </div>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-6 gap-5">
                {entities.map(el => {
                    return (
                        <div className="center col-span-1 h-56 w-full flex-col rounded-xl bg-green p-1">
                            <h3
                                className="h3 mx-0 my-3 text-5xl"
                                dangerouslySetInnerHTML={{
                                    __html: `&${el[0]};`,
                                }}
                            />
                            {el.map(code => (
                                <Code code={code} />
                            ))}
                        </div>
                    )
                })}
            </div>
            <Footer className="pt-24" />
        </div>
    )
}

const Code = ({ code }) => {
    const [effect, setEffect] = useState(false)

    const copyToClipboard = text => {
        navigator.clipboard.writeText(text)
        setEffect(true)
    }
    return (
        <p
            className={`${
                effect && "animate-wiggle"
            } my-1 w-full cursor-pointer rounded bg-black py-1 text-center`}
            onClick={() => copyToClipboard(`&${code};`)}
            onAnimationEnd={() => setEffect(false)}
        >
            &{code};
        </p>
    )
}
