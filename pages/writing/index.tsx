import { NextPage } from "next"
import Header from "@/components/Header"
import { getAllPosts } from "../../lib/writing"
import Footer from "../../components/Footer"
import Link from "next/link"
import { format, parse } from "date-fns"
import FilterButton from "@/components/FilterButton"
import Head from "next/head"
import { useState, useEffect } from "react"
import { RiCloseLine } from "react-icons/ri"

const filters = ["Linux", "Coding", "Music", "Writing"]

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

    useEffect(() => {
        console.log("filter changed")

        if (filter === "all" || filter === "") {
            setCurrentPosts(posts)
        } else {
            let x = posts.map(post => {
                let allTags: string = ""

                post.tags.map(tag => {
                    allTags += tag.replace(" ", "").toLowerCase()
                })

                if (allTags.includes(filter.toLowerCase())) {
                    console.log(`${allTags} includes ${filter}`)
                    return post
                }
            })

            setCurrentPosts(x.filter(Boolean))
        }
    }, [filter])

    return (
        <div className="page bg-slate-50 dark:bg-slate-800">
            <Head>
                <title>Writing</title>
            </Head>
            <div>
                <Header />
                <section className="section">
                    <div className="container">
                        <div className="flex">
                            <input
                                className="bg-slate-300 px-3 py-1 rounded-l w-2/12 text-center font-bold outline-none focus:outline-none"
                                value="Filter"
                                readOnly
                            />
                            <input
                                type="text"
                                className="bg-slate-200 px-3 py-1 xrounded-r w-9/12 outline-none focus:outline-none"
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                                autoFocus
                            />
                            <button
                                onClick={() => setFilter("")}
                                className="bg-slate-300 px-3 py-1 rounded-r w-1/12 text-center font-bold outline-none focus:outline-none hover:bg-slate-400"
                            >
                                <RiCloseLine className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        {filters.map(f => (
                            <FilterButton
                                key={f}
                                label={f}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <section className="section">
                <div className="container grid grid-cols-2 gap-6">
                    {currentPosts?.length > 0 ? (
                        <>
                            {currentPosts?.map(post => (
                                <Link
                                    href={`/writing/${post.slug}`}
                                    key={post.slug}
                                >
                                    <a className="col-span-2 sm:col-span-1 border-2 rounded-lg p-3 flex flex-col justify-between h-52 hover:bg-slate-600 hover:text-white hover:border-slate-700">
                                        <h2 className="text-xl font-bold dark:text-slate-200">
                                            {post.title}
                                        </h2>
                                        <div>
                                            <p className="text-sm p-2 dark:text-slate-400">
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
                    ) : (
                        <div className="col-span-2 flex justify-center items-center">
                            <h1 className="text-2xl dark:text-slate-300 font-bold">
                                NO POSTS HERE
                            </h1>
                        </div>
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
