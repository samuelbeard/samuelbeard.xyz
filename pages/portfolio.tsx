import { NextPage } from "next"
import Header from "@/components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Image from "next/image"

const Music: NextPage = () => {
    return (
        <div className="page">
            <Head>
                <title>Web Portfolio</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container mt-12 mb-12 lg:w-10/12">
                    <h2 className="h2">Formula One Exhibition - G.O.A.T</h2>
                    <p>
                        Built an interactive exhibit that showcased the history
                        and allowed visitors to select the Greatest-of-all-Time
                        Formula One racer. Users could answer some questions
                        about what they found important about Formula One (race
                        wins vs points won, etc.) and the exhibit would then
                        show the top three drivers that best fit their criteria.
                    </p>
                    <p className="mt-3">
                        Visitors could get an automatically generated image of
                        their top three racers to post on their social media and
                        their choices would be added to the running highscore of
                        all racers chosen.
                    </p>
                    <p className="mt-3">
                        We used NextJS and React for the user interface and
                        websockets to keep both the touchscreen and display
                        screen in sync with eachother. The data was provided by
                        a data analyst and was regularly updated after races and
                        processed with python scripts.
                    </p>

                    <Image
                        src="/img/projects/f1-goat-3.jpg"
                        alt=""
                        width={1280}
                        height={1700}
                        className="mt-5 px-10"
                    />
                    <div className="mt-5 flex gap-3">
                        <div>
                            <Image
                                src="/img/projects/f1-goat-2.webp"
                                alt=""
                                width={908}
                                height={555}
                            />
                        </div>
                        <div>
                            <Image
                                src="/img/projects/f1-goat-1.webp"
                                alt=""
                                width={1024}
                                height={771}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container mt-12 mb-12 lg:w-10/12">
                    <h2 className="h2">Women&apos;s Business Club</h2>
                    <p>
                        Rebranded Women&apos;s Business Club&apos; image to
                        appeal to larger companies and give an aura of
                        professionalism.
                    </p>
                    <p>
                        NextJS was used for the user interface and TailwindCSS
                        for the design. A custom made component library was
                        created to make the design more flexible. The site
                        integrates with events software for membership
                        management and ticketing.
                    </p>
                    <Image
                        src="/img/projects/wbc-logo.png"
                        alt=""
                        width={1145}
                        height={577}
                        className="mt-5 px-10"
                    />
                    <Image
                        src="/img/projects/wbc.jpeg"
                        alt=""
                        width={1464}
                        height={749}
                        className="mt-5 px-10"
                    />
                </div>
            </section>
            <section className="section">
                <div className="container mt-12 mb-12 lg:w-10/12">
                    <h2 className="h2">Conversational Learning</h2>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Music
