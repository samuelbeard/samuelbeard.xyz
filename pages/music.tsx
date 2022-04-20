import { NextPage } from "next"
import Header from "@/components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import music from "../content/music.json"

const Music: NextPage = () => {
    return (
        <div className="page bg-slate-50 dark:bg-slate-800">
            <Head>
                <title>Music</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container grid grid-cols-2 gap-6">
                    {music?.map((post: { title: string; youtube: string }) => (
                        <div
                            key={post.title}
                            className="bg-slate-200 dark:bg-slate-700 rounded-lg text-center p-4 flex flex-col justify-between"
                        >
                            <h2 className="text-xl font-bold mb-3 dark:text-slate-300">
                                {post.title}
                            </h2>
                            {post.youtube && (
                                <div className="video-container">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${post.youtube}?rel=0&controls=0&showinfo=0`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Music
