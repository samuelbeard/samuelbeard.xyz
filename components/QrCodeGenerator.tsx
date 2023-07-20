import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"

export default function QrCodeGenerator() {
    const [value, setValue] = useState<string>("https://samuelbeard.xyz")
    const [fgColor, setFgColor] = useState<string>("#000000")

    const download = () => {
        const canvas = document.querySelector(
            "#qrcode-canvas"
        ) as HTMLCanvasElement
        if (!canvas) throw new Error("<canvas> not found")

        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream")

        const downloadLink = document.createElement("a")
        downloadLink.href = pngUrl
        downloadLink.download = "QRCode.png"
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="mx-10 flex max-w-2xl flex-col rounded-xl bg-brand-yellow p-5 text-brand-black md:w-1/2">
                <label htmlFor="value">QR Code Value</label>
                <input
                    placeholder={value}
                    id="value"
                    className="mt-2 w-full rounded py-2 px-3 text-black"
                    type="text"
                    onChange={e => setValue(e.target.value)}
                />
                <div className="mt-7 flex items-center">
                    <label>Colour</label>
                    <input
                        className="ml-5 rounded"
                        type="color"
                        name="col"
                        id=""
                        onChange={e => setFgColor(e.target.value)}
                    />
                </div>
                <button
                    className="button mx-auto mt-7 w-fit md:mx-0"
                    onClick={() => download()}
                >
                    Save as PNG
                </button>
            </div>
            <div>
                <div className="m-3 w-fit rounded-xl bg-white p-3">
                    <QRCodeCanvas
                        value={value}
                        id="qrcode-canvas"
                        imageSettings={{
                            src: "",
                            x: undefined,
                            y: undefined,
                            height: 80,
                            width: 80,
                            excavate: true,
                        }}
                        bgColor="transparent"
                        fgColor={fgColor}
                        size={300}
                    />
                </div>
            </div>
        </div>
    )
}
