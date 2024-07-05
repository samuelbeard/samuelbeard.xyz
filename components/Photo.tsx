import Image from "next/image"
import { useState } from "react"

interface Props {
    image: string
    title: string
    height: number
    width: number
}

const Photo = ({ image, title, height, width }: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="rounded-sm bg-white p-2">
            <Image
                width={width}
                height={height}
                src={`/img/photography/${image}`}
                alt={title}
                className="w-full flex-auto rounded-sm"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div
                    className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90"
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        width={width}
                        height={height}
                        src={`/img/photography/${image}`}
                        alt={title}
                        className="max-h-full w-auto"
                    />
                </div>
            )}
        </div>
    )
}

export default Photo
