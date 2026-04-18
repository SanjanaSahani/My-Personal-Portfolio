"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

function AboutSection() {
    const roles = ["Frontend Developer", "Web Developer", "Software Developer", "Data Analyst"];
    const roleDescriptions = [
        "I'm a Frontend Developer. I create responsive, user-friendly interfaces with modern web technologies.",
        "I'm a Web Developer. I build dynamic and fully functional websites that deliver seamless experiences.",
        "I'm a Software Developer. I develop scalable and efficient applications with clean, maintainable code.",
        "I'm a Data Analyst. I analyze data and provide insights to help businesses make informed decisions."
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [fade, setFade] = useState(true);

    // Typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = roles[index];

            if (!deleting) {
                setText(fullText.substring(0, subIndex + 1));
                setSubIndex(subIndex + 1);

                if (subIndex + 1 === fullText.length) {
                    setTimeout(() => setDeleting(true), 1000);
                }
            } else {
                setText(fullText.substring(0, subIndex - 1));
                setSubIndex(subIndex - 1);

                if (subIndex === 0) {
                    setDeleting(false);
                    setIndex((prev) => (prev + 1) % roles.length);
                    setFade(false);
                    setTimeout(() => setFade(true), 100);
                }
            }
        }, deleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, roles]);

    return (
        <div className="bg-black h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-1">

            <div className="mt-10 p-4 relative z-10 w-full text-center">
                <p className="mt-20 mb-16 text-4xl text-white"> Hello! My Name is <span className="font-semibold bg-linear-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Sanjana Sahani</span></p>

                {/* Typewriter Hero */}
                <h1 className="mt-10 md:mt-1 text-xl md:text-xl font-bold text-white">
                    I'm a{" "}
                    <span className="bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {text}
                    </span>
                    <span className="blinking-cursor">|</span>
                </h1>

                {/* Dynamic Description with fade */}
                <p
                    className={`mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {roleDescriptions[index]}
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/sanjana-sahani-b33b7423b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-2xl transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/SanjanaSahani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-2xl transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/_shimmerspirit_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl transition-colors">
                        <FaInstagram />
                    </a>
                    <a href="https://app.netlify.com/teams/sanjanasahani/overview" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-2xl transition-colors">
                        <SiNetlify />
                    </a>
                </div>

                <div className="mt-6 flex justify-center">
                    <div className="max-w-2xl">
                        <p className="text-white md:text-lg text-center">

                            An IT graduate from
                            <span className="font-medium text-gray-200"> Gorakhpur, Uttar Pradesh</span>. I am a positive, adaptable, and driven individual
                            with a strong foundation in
                            <span className="text-purple-400 font-medium"> Frontend Development</span>,
                            <span className="text-blue-400 font-medium"> Web Development</span>,
                            <span className="text-indigo-400 font-medium"> Software Development</span>, and
                            <span className="text-pink-400 font-medium"> Data Analysis</span>.

                            <br /><br />

                            I have hands-on experience building responsive and user-friendly web applications using modern technologies
                            such as <span className="text-gray-100 font-medium">HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap</span>,
                            and <span className="text-gray-100 font-medium"> REST APIs</span>.

                            <br /><br />

                            One of my key projects is an e-commerce flower shop website, where I focused on seamless navigation,
                            efficient state management, and modern UI design. Through multiple internships in frontend and web development,
                            I have gained practical experience working on real-world projects and collaborating in team environments.

                            <br /><br />

                            I am passionate about learning new technologies, creating innovative solutions, and contributing effectively
                            to organizational growth.
                        </p>
                    </div>
                </div>

                {/* Animated Button */}
                <div className="mt-10 flex justify-center gap-4">
                    {/* Hire Me Button */}
                    <Link href="/">
                        <button className="relative inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-full overflow-hidden group">
                            <span className="absolute inset-0 rounded-full p-0.5 bg-[linear-gradient(270deg,#a855f7,#3b82f6,#6366f1,#a855f7)] bg-size-[600%_600%] animate-borderMove"></span>
                            <span className="absolute inset-0.5 bg-black rounded-full"></span>
                            <span className="absolute inset-0 bg-linear-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-md transition duration-300"></span>
                            <span className="relative text-sm md:text-base tracking-wide">
                                Hire Me
                            </span>
                        </button>
                    </Link>

                    {/* Download Resume Button */}
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="relative inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-full overflow-hidden group">
                            <span className="absolute inset-0 rounded-full p-0.5 bg-[linear-gradient(270deg,#22c55e,#06b6d4,#3b82f6,#22c55e)] bg-size-[600%_600%] animate-borderMove"></span>
                            <span className="absolute inset-0.5 bg-black rounded-full"></span>
                            <span className="absolute inset-0 bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition duration-300"></span>
                            <span className="relative text-sm md:text-base tracking-wide">
                                Download Resume
                            </span>
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default AboutSection;