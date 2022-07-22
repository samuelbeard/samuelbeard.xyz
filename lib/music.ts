export const getAllMusic = async () => {
    const data = await import("../content/music.json")
    return data
}
