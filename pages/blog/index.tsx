import { NextPage } from "next"
import Header from "@/components/Header"
import { getAllPosts } from "../../lib/writing"
import Footer from "../../components/Footer"
import Link from "next/link"
import { format, parse } from "date-fns"
import Head from "next/head"
import { useState } from "react"
import { RiGitCommitFill } from "react-icons/ri"

interface Props {
    posts: Post[]
}

interface Post {
    title: string
    date: string
    slug: string
    tags: string[]
    published: boolean
}

const Writing: NextPage<Props> = ({ posts }) => {
    const [currentPosts, setCurrentPosts] = useState<Post[]>(posts)

    return (
        <>
            <div className="page">
                <Head>
                    <title>Blog | Samuel Beard</title>
                </Head>
                <div>
                    <Header />
                </div>
                <section className="section mt-10">
                    <div className="container grid grid-cols-2 gap-6">
                        {currentPosts?.length > 0 ? (
                            <>
                                {currentPosts?.map((post, i) => {
                                    return (
                                        post.published && (
                                            <Link
                                                className="animate-in col-span-2 flex rounded-lg p-3"
                                                href={`/blog/${post.slug}`}
                                                key={post.slug}
                                                style={{
                                                    animationDelay: `${String(
                                                        i * 0.15
                                                    )}s`,
                                                }}
                                            >
                                                <h2 className="">
                                                    <RiGitCommitFill className="mr-4 inline rotate-90 animate-pulse text-xl text-brand-yellow" />
                                                </h2>
                                                <div>
                                                    <h2 className="text-xl font-bold">
                                                        {post.title}
                                                    </h2>
                                                    <div>
                                                        <p className="p-2 text-sm">
                                                            {format(
                                                                parse(
                                                                    post.date,
                                                                    "yyyy-MM-dd",
                                                                    new Date()
                                                                ),
                                                                "do MMMM yyyy"
                                                            )}
                                                        </p>
                                                        {post.tags.map(tag => (
                                                            <button
                                                                className="badge"
                                                                key={tag}
                                                            >
                                                                {tag}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    )
                                })}
                            </>
                        ) : (
                            <div className="col-span-2 flex items-center justify-center">
                                <h1 className="text-2xl font-bold dark:text-slate-300">
                                    NO POSTS HERE
                                </h1>
                            </div>
                        )}
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Writing

export async function getStaticProps() {
    const posts = await getAllPosts()

    return {
        props: {
            posts,
        },
    }
}
