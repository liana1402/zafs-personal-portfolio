import CustomLink from "./link"
import { useState } from "react"

// TODO: maybe use linkOptions?

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className= "absolute top-0 left-0 pt-5 w-full h-16 flex items-center justify-center">
            <div className="absolute left-10 md:ml-4 space-x-10">
                <CustomLink label="Home" icon="home" href="/" />
                <CustomLink label="About" icon="person" href="/about" />
                <CustomLink label="Projects" icon="assignment" href="/projects" />
            </div>
            <div className="absolute right-10 mr-4 hidden space-x-10 md:block">
                <CustomLink label="Email" href="mailto:zafranzak98@gmail.com" external={true} />
                <CustomLink label="Instagram" href="https://www.instagram.com/zafxhiswork/" external={true} />
                <CustomLink label="LinkedIn" href="https://www.linkedin.com/in/zafranzakaria" external={true} />
            </div>
            <div className="absolute right-6 top-4 md:hidden">
                <button
                    type="button"
                    className="text-custom-black hover:text-custom-white"
                    aria-label={isMenuOpen ? "Close external links menu" : "Open external links menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="external-links-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}>
                    <span className="material-symbols-outlined text-4xl" aria-hidden="true">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>
                {isMenuOpen && (
                    <div id="external-links-menu" className="absolute right-0 top-12 flex min-w-36 flex-col gap-4 bg-custom-white p-4 shadow-lg rounded-lg">
                        <CustomLink label="Email" href="mailto:zafranzak98@gmail.com" external={true} />
                        <CustomLink label="Instagram" href="https://www.instagram.com/zafxhiswork/" external={true} />
                        <CustomLink label="LinkedIn" href="https://www.linkedin.com/in/zafranzakaria" external={true} />
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar