'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


function ProjectSection() {

    const project = [
        {
            title: "Flower Shop Website",
            link: "https://dreamy-babka-cb0889.netlify.app/",
            description:
                "A fully functional e-commerce flower shop where users can browse, select, and purchase flowers online with ease. The platform features a well-structured product catalog, category-based browsing for seamless navigation, and a dynamic shopping cart system for managing purchases. Designed to provide a smooth and user-friendly shopping experience, the website ensures efficient product discovery and checkout.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/FlowerShop.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Flower Shop Website"
                    />
                </div>
            ),
        },
        {
            title: "Blog Admin Dashboard",
            link: "https://famous-dodol-8e263d.netlify.app/",
            description:
                "Developed a production-style blog admin dashboard using React, simulating real-world content management workflows.Implemented full CRUD operations, search, filtering, pagination, and LocalStorage-based data persistence.Built with a scalable component architecture and custom hooks for clean state management.Focused on responsive UI/UX, optimized performance, and practical admin interface design.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/AdminBlog.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Blog-Admin-Dashboard"
                    />
                </div>
            ),
        },
        {
            title: "Matrimony Biodata Generator",
            link: "https://elegant-froyo-974ccb.netlify.app/",
            description:
                "A modern React-based Matrimony Biodata Generator designed to help users create professional marriage biodata with customizable templates and PDF download functionality. It offers a SaaS-like experience with instant preview, photo upload, and color customization. Built with a focus on responsive design, performance, and intuitive user experience for seamless biodata creation.Ensures quick data entry and smooth export process for users.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/ShadiBioData.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Matrimony Biodata Generator"
                    />
                </div>
            ),
        },
        {
            title: "Real-Time Image Search App",
            link: "https://enchanting-flan-a6ae2b.netlify.app/",
            description:
                "A modern, responsive image search application built with React and powered by the Unsplash API. This app enables users to instantly discover high-quality images in real time with a smooth and intuitive interface. It features a custom useAxios hook for efficient data fetching, is styled using Tailwind CSS for a clean and flexible design, and includes elegant skeleton loading screens to enhance the user experience during data loading.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/ImageSearchApp.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Real-Time Image Search App"
                    />
                </div>
            ),
        },
        {
            title: "Weather Application ",
            link: "https://astounding-froyo-e920c5.netlify.app/",
            description:
                "A modern, responsive weather application built with React, Vite, and Tailwind CSS, powered by the Open-Meteo API. It provides real-time weather data for any city worldwide, including current conditions, hourly forecasts, and a 5-day outlook. Designed for fast, clean, and user-friendly access to accurate weather information.Delivers seamless API integration with efficient data handling and rendering.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/WeatherApp.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Weather Application "
                    />
                </div>
            ),
        },
        {
            title: "Interactive Recipe App",
            link: "https://warm-croquembouche-bf667f.netlify.app/",
            description:
                "A React.js project utilizing RapidAPI for real-time weather data and Tailwind CSS for sleek design. Provides dynamic visualization of weather information with user-friendly interaction. Simplifies accessing and understanding weather forecasts.Ensures smooth API integration with responsive layout and efficient data updates. Delivers fast performance and intuitive user experience across all devices.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white cursor-pointer">
                    <img
                        src="/Images/RecipeApp.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        alt="Interactive Recipe App"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">My Projects</h1>
            <div className="flex flex-wrap justify-center">
                {project.map((course, index) => (
                    <CardContainer key={index} className="inter-var m-4">
                        <CardBody className="bg-black relative group/card hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-white/20 w-auto sm:w-120 h-auto rounded-xl p-6 border">

                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-300 dark:text-white"
                            >
                                {course.title}
                            </CardItem>

                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>

                            <CardItem translateZ="100" className="w-full mt-4">
                                {course.content}
                            </CardItem>

                            <div className="cursor-pointer mt-20">
                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal text-white dark:text-white cursor-pointer"
                                    >
                                        Visit Now →
                                    </CardItem>
                                </a>
                            </div>

                        </CardBody>
                    </CardContainer>
                ))}
            </div>
            <p className="text-center text-neutral-500">Visit my <span><a href="https://github.com/SanjanaSahani" target="_blank" rel="noopener noreferrer" className="text-green-800 underline"> Github</a></span> to explore more projects, source code, and ongoing builds.</p>
            
        </div>
    )
}

export default ProjectSection      