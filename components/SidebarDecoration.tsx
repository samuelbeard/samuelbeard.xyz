import { useEffect, useState } from "react"

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const SidebarDecoration = () => {
    const [docHeight, setDocHeight] = useState<number>()
    const [coords, setCoords] = useState<string>()

    useEffect(() => {
        setDocHeight(window.innerHeight)

        const updateSize = () => {
            setDocHeight(window.innerHeight)
        }

        window.addEventListener("resize", updateSize)

        return () => window.removeEventListener("resize", updateSize)
    }, [])

    useEffect(() => {
        const createCoords = () => {
            const divide = 15
            const squareSize = docHeight / divide

            // Create an array of coords h/20
            const arr = Array(divide)
                .fill("")
                .map((el, i) => {
                    const step = i * squareSize
                    const out = randomInt(1, 2)
                    console.log(squareSize)
                    return `${squareSize * out}|${step} `
                })

            // Add the beginning and end coords
            arr.unshift("0|0 ")
            arr.push(`${squareSize}|${docHeight} 0|${docHeight}`)

            setCoords(arr.toString().replaceAll(",", " ").replaceAll("|", ","))
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
