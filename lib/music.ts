export const getAllMusic = async () => {
    const data = await import("../content/music.json")
    console.log(typeof data)
    return data
}
