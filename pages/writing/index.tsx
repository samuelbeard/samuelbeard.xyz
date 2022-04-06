import { NextPage } from "next"
import Header from "@/components/Header"
import { getAllPosts } from "../../lib/writing"
import Footer from "../../components/Footer"
import Link from "next/link"
import { format, parse } from "date-fns"
import Head from "next/head"

interface Props {
    posts: Post[]
}

interface Post {
    title: string
    date: string
    slug: string
    tags: string[]
}

const Writing: NextPage<Props> = ({ posts }) => {
    console.log(posts[0].tags)
    return (
        <div className="page">
            <Head>
                <title>Writing</title>
            </Head>
            <Header />
            <section className="section">
                <div className="container grid grid-cols-2 gap-6">
                    {posts.map(post => (
                        <Link href={`/writing/${post.slug}`} key={post.slug}>
                            <a className="col-span-1 border-2 rounded-lg p-3 flex flex-col justify-between h-52 hover:bg-slate-600 hover:text-white hover:border-slate-700">
                                <h2 className="text-xl font-bold">
                                    {post.title}
                                </h2>
                                <div>
                                    <p className="text-sm p-2">
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
                                            className="bg-slate-500 text-white px-2 py-0.5 rounded text-sm capitalize m-1"
                                            key={tag}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
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
