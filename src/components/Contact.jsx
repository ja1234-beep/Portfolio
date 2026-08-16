import { useState } from "react"


function Contact() {

  const [copied, setCopied] = useState(false)


  const email = "jatin210406@gmail.com"


  const handleCopyEmail = async () => {

    try {
      await navigator.clipboard.writeText(email)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      console.error("Failed to copy email:", error)
    }

  }


  return (
    <section id="contact" className=" scroll-mt-24 px-6 py-24">

      <div className="mx-auto max-w-4xl text-center">

        {/* Heading */}

        <p className="text-sm font-medium text-cyan-400">
          05. GET IN TOUCH
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Let's build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          I'm always open to discussing new opportunities, interesting
          projects, or ideas worth building.
        </p>


        {/* Email */}

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm text-gray-500">
            Email me at
          </p>

          <p className="mt-2 break-all text-lg font-medium text-white">
            {email}
          </p>


          <button
            onClick={handleCopyEmail}
            className="mt-5 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            {copied ? "Email Copied ✓" : "Copy Email"}
          </button>

        </div>


        {/* Social links */}

        <div className="mt-10 flex justify-center gap-6">

          <a
            href="#"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${email}`}
            className="text-gray-400 transition hover:text-cyan-400"
          >
            Email ↗
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact