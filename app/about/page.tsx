"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";

function AboutSection() {
    const roles = useMemo(() => [
        "Frontend Developer",
        "Web Developer",
        "Software Developer",
        "Data Analyst"
    ], []);

    const roleDescriptions = useMemo(() => [
        "I'm a Frontend Developer. I create responsive, user-friendly interfaces with modern web technologies.",
        "I'm a Web Developer. I build dynamic and fully functional websites that deliver seamless experiences.",
        "I'm a Software Developer. I develop scalable and efficient applications with clean, maintainable code.",
        "I'm a Data Analyst. I analyze data and provide insights to help businesses make informed decisions."
    ], []);

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [fade, setFade] = useState(true);

    // TYPEWRITER EFFECT
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
                    setTimeout(() => setFade(true), 120);
                }
            }
        }, deleting ? 50 : 120);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, roles]);

    return (
        <section className="bg-slate-950 w-full flex flex-col items-center justify-center overflow-hidden">

            {/* LAMP HEADER */}
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-linear-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent text-center font-semibold text-4xl md:text-7xl"
                >
                    Hi, I'm <br />
                    <span className="text-white font-bold">Sanjana Sahani</span>
                </motion.h1>
            </LampContainer>

            {/* CONTENT SECTION (SPACED PROPERLY) */}
            <div className="w-full max-w-5xl px-6 md:px-10 text-center relative z-10 -mt-16 md:-mt-20 space-y-10">

                {/* TYPEWRITER */}
                <div className="space-y-4 -mt-36">
                    <h2 className="text-lg md:text-2xl font-semibold text-white">
                        A{" "}
                        <span className="bg-linear-to-r from-cyan-500 via-white to-cyan-400 bg-clip-text text-transparent">
                            {text}
                        </span>
                        <span className="animate-pulse">|</span>
                    </h2>

                    <p
                        className={`text-sm md:text-lg text-neutral-300 max-w-2xl mx-auto transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {roleDescriptions[index]}
                    </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 text-xl">
                    <a href="https://www.linkedin.com/in/sanjana-sahani-b33b7423b" target="_blank">
                        <FaLinkedin className="text-white hover:text-blue-500 transition" />
                    </a>
                    <a href="https://github.com/SanjanaSahani" target="_blank">
                        <FaGithub className="text-white hover:text-gray-400 transition" />
                    </a>
                    <a href="https://www.instagram.com/_shimmerspirit_" target="_blank">
                        <FaInstagram className="text-white hover:text-pink-500 transition" />
                    </a>
                    <a href="https://app.netlify.com/teams/sanjanasahani/overview" target="_blank">
                        <SiNetlify className="text-white hover:text-green-500 transition" />
                    </a>
                </div>

                {/* ABOUT TEXT (MORE SPACE + CLEAN READABILITY) */}
                <div className="mt-40 flex justify-center">
                    <div className="w-full max-w-5xl space-y-6">
                        <h1 className="text-center text-white text-4xl ">About Me</h1>
                        <p className="text-white text-center text-sm md:text-lg leading-relaxed">

                            An IT graduate from{" "}
                            <span className="font-medium text-gray-200">
                                Gorakhpur, Uttar Pradesh
                            </span>. I am a positive, adaptable, and driven individual with a strong foundation in{" "}

                            <span className="text-purple-400 font-medium">Frontend Development</span>,{" "}
                            <span className="text-blue-400 font-medium">Web Development</span>,{" "}
                            <span className="text-indigo-400 font-medium">Software Development</span>, and{" "}
                            <span className="text-pink-400 font-medium">Data Analysis</span>.

                            <br /><br />

                            I have hands-on experience building responsive and user-friendly web applications using modern technologies such as{" "}
                            <span className="text-gray-100 font-medium">
                                HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap
                            </span>, and{" "}
                            <span className="text-gray-100 font-medium">REST APIs</span>.

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

                {/* BUTTONS */}
                <div className="mt-12 mb-20 flex flex-col sm:flex-row justify-center gap-5">

                    {/* Hire Me Button */}
                    <Link href="/contact">
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
        </section>
    );
}

export default AboutSection;