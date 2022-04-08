import { NextPage } from "next"
import Header from "@/components/Header"
import { getAllPosts } from "../../lib/writing"
import Footer from "../../components/Footer"
import Link from "next/link"
import { format, parse } from "date-fns"
import Head from "next/head"
import {
    useState,
    ChangeEvent,
    Key,
    ReactChild,
    ReactFragment,
    ReactPortal,
} from "react"

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
    const [currentPosts, setCurrentPosts] = useState<Post[]>(posts)
    const [filter, setFilter] = useState("")

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)

        if (e.target.value === "all") {
            setCurrentPosts(posts)
        } else {
            let x = posts.map(post => {
                let allTags: string = ""

                post.tags.map(tag => {
                    allTags += tag.replace(" ", "").toLowerCase()
                })

                if (allTags.includes(e.target.value.toLowerCase())) {
                    console.log(`${allTags} includes ${e.target.value}`)
                    return post
                }
            })

            setCurrentPosts(x.filter(Boolean))
        }

        if (e.target.value === "") {
            setCurrentPosts(posts)
        }
    }

    return (
        <div className="page">
            <Head>
                <title>Writing</title>
            </Head>
            <div>
                <Header />
                <section className="section">
                    <div className="container">
                        <div className="flex">
                            <input
                                className="bg-slate-300 px-3 py-1 rounded-l w-1/6 text-center font-bold outline-none focus:outline-none"
                                value="Filter"
                                readOnly
                            />
                            <input
                                type="text"
                                className="bg-slate-200 px-3 py-1 rounded-r outline-none focus:outline-none"
                                value={filter}
                                onChange={e => handleFilter(e)}
                                autoFocus
                            />
                        </div>
                    </div>
                </section>
            </div>
            <section className="section">
                <div className="container grid grid-cols-2 gap-6">
                    {currentPosts && (
                        <>
                            {currentPosts?.map(post => (
                                <Link
                                    href={`/writing/${post.slug}`}
                                    key={post.slug}
                                >
                                    <a className="col-span-2 sm:col-span-1 border-2 rounded-lg p-3 flex flex-col justify-between h-52 hover:bg-slate-600 hover:text-white hover:border-slate-700">
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
                        </>
                    )}
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
