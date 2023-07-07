import { NextPage } from "next"
import Header from "@/components/Header"
import { getAllPosts } from "../../lib/writing"
import Footer from "../../components/Footer"
import Link from "next/link"
import { format, parse } from "date-fns"
import FilterButton from "@/components/FilterButton"
import Head from "next/head"
import { useState, useEffect } from "react"
import { RiGitCommitFill } from "react-icons/ri"
import SidebarDecoration from "../../components/SidebarDecoration"

const filters = ["Linux", "Coding"]

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
        if (filter === "all" || filter === "") {
            setCurrentPosts(posts)
        } else {
            let x = posts.map(post => {
                let allTags: string = ""

                post.tags.map(tag => {
                    allTags += tag.replace(" ", "").toLowerCase()
                })

                if (allTags.includes(filter.toLowerCase())) {
                    return post
                }
            })

            setCurrentPosts(x.filter(Boolean))
        }
    }, [filter, posts])

    return (
        <>
            <SidebarDecoration />
            <div className="page">
                <Head>
                    <title>Blog | Samuel Beard</title>
                </Head>
                <div>
                    <Header />
                    {/* <section className="section mt-6">
                    <div className="container">
                        <div className="flex">
                            <input
                                className="bg-slate-400 px-3 py-1 rounded-l w-2/12 text-center font-bold outline-none focus:outline-none"
                                value="Filter"
                                readOnly
                            />
                            <input
                                type="text"
                                className="bg-slate-300 px-3 py-1 xrounded-r w-9/12 outline-none focus:outline-none"
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                                autoFocus
                            />
                            <button
                                onClick={() => setFilter("")}
                                className="bg-slate-400 px-3 py-1 rounded-r w-1/12 flex justify-center font-bold outline-none focus:outline-none hover:bg-slate-500"
                            >
                                <RiCloseLine className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </section> */}
                    {/* <section className="section">
                    <div className="container text-center">
                        {filters.map(f => (
                            <FilterButton
                                key={f}
                                label={f}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        ))}
                    </div>
                </section> */}
                </div>
                <section className="section mt-10">
                    <div className="container grid grid-cols-2 gap-6">
                        {currentPosts?.length > 0 ? (
                            <>
                                {currentPosts?.map(post => (
                                    <Link
                                        className="col-span-2 rounded-lg p-3 flex xjustify-between xh-52 xcard xcard-hover xborder-b"
                                        href={`/blog/${post.slug}`}
                                        key={post.slug}
                                    >
                                        <h2 className="">
                                            <RiGitCommitFill className="text-xl inline mr-4 text-red-600 rotate-90 animate-pulse" />
                                        </h2>
                                        <div>
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
                                                        className="badge"
                                                        key={tag}
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
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
