import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/writing/")

export function getAllWritingIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ""),
            },
        }
    })
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    }
}

export async function getAllPosts() {
    const allPostsData = await Promise.all(
        getAllWritingIds().map(({ params }) => getPostData(params.slug))
    )

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}
