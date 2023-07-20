import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getAllWritingIds, getPostData } from "@/lib/writing"
import { format, parse } from "date-fns"

const Post = ({ postData }) => {
    return (
        <div className="page">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Header />
            <div className="section">
                <div className="container">
                    <h1 className="h1 mb-0">{postData.title}</h1>
                    <h3 className="h3 mt-0 font-sans text-lg font-normal text-white">
                        {format(
                            parse(postData.date, "yyyy-MM-dd", new Date()),
                            "do MMMM yyyy"
                        )}
                    </h3>
                    {postData.tags.map(tag => (
                        <span className="badge" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="section mt-8">
                <div className="container px-2">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                        className="markdown"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug)

    return {
        props: {
            postData,
        },
    }
}

export async function getStaticPaths() {
    const paths = getAllWritingIds()

    return {
        paths,
        fallback: false,
    }
}
