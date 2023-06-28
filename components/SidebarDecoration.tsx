import { useEffect, useState } from "react"

const SidebarDecoration = () => {
    const [docHeight, setDocHeight] = useState<number>()
    const [coords, setCoords] = useState()

    useEffect(() => {
        // const dh = document.documentElement.scrollHeight
        // console.log(dh)
        // setDocHeight(dh)
        setDocHeight(window.innerHeight)

        const updateSize = () => {
            setDocHeight(window.innerHeight)
        }

        window.addEventListener("resize", updateSize)

        return () => window.removeEventListener("resize", updateSize)
    }, [])
    // const docHeight = document.body .scrollHeight
    // console.log(docHeight)

    useEffect(() => {
        const createCoords = () => {
            const divide = 20
            const squareSize = docHeight / divide
            // Create an array of coords h/20
            const arr = Array(divide)
                .fill("")
                .map((el, i) => {
                    const n = Math.floor(i * squareSize)
                    console.log(squareSize)
                    return `0|${n} 50|${n} ${n}|${n} ${n}|0 0|${n}`
                })

            setCoords(arr.toString().replaceAll(",", " ").replaceAll("|", ","))

            console.log(
                arr.toString().replaceAll(",", " ").replaceAll("|", ",")
            )

            // TRY
            // Make squares that go down the screen
            // Randomly add squares to the right of some of te squares on the left
            // Connect corners in polygon.
        }

        if (docHeight) {
            createCoords()
        }
    }, [docHeight])

    return (
        <div className="h-screen fixed">
            {coords && (
                <svg width="150" height="1000" className="">
                    <polygon
                        points={coords}
                        style={{ strokeWidth: 0 }}
                        className="fill-gray-900"
                    />
                </svg>
            )}
        </div>
    )
}

export default SidebarDecoration
