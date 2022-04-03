import Head from "next/head"
import { useEffect, useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)

            const res = await fetch("api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    message: messageRef.current.value,
                }),
            })

            const { error } = await res.json()

            if (error) {
                console.log(`Error: ${error}`)
                return
            }

            nameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""
            setSuccess(true)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="w-full flex flex-col" onSubmit={e => handleSubmit(e)}>
            {/* <Head>
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
                />
            </Head> */}
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                className="bg-zinc-100 shadow-lg p-2 rounded-lg my-3"
                ref={nameRef}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                className="bg-zinc-100 shadow-lg p-2 rounded-lg my-3"
                ref={emailRef}
            />
            <label htmlFor="message">Message</label>
            {/* <input
                type="text"
                name="message"
                className="bg-red-500 p-2 rounded-lg my-3"
                ref={messageRef}
            /> */}
            <textarea
                name="message"
                ref={messageRef}
                id=""
                cols="30"
                rows="10"
                className="bg-zinc-100 shadow-lg p-2 rounded-lg my-3"
            ></textarea>

            <ReCAPTCHA size="normal" sitekey={SITE_KEY} />

            <div className="mt-6">
                {loading && <p>Loading...</p>}
                {success && !loading ? (
                    <p>Your message has been sent!</p>
                ) : (
                    <button
                        type="submit"
                        // disabled={
                        //     !nameRef.current.value ||
                        //     !emailRef.current.value ||
                        //     !messageRef.current.value
                        // }
                        className="bg-amber-500 text-white font-bold rounded-lg py-3 px-6 shadow hover:bg-zinc-900 transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:shadow-none"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    )
}
