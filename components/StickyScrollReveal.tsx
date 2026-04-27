"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Images from "next/image";


const content = [
  {
    title: "Flower Shop Website",
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
    description:
      "A modern React-based Matrimony Biodata Generator that allows users to create professional marriage biodata with customizable templates and download it as a PDF.This project provides a simple SaaS-like experience where users can fill in their details, upload a photo, preview the biodata instantly, customize colors, and download the final biodata.",
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
    description:
      "A modern, responsive weather application built with React, Vite, and Tailwind CSS, powered by the Open-Meteo API. It provides real-time weather data for any city worldwide, including current conditions, hourly forecasts, and a 5-day outlook. Designed for fast, clean, and user-friendly access to accurate weather information.",
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
    description:
      "Built a responsive recipe app that lets users search and explore. Features dynamic search, clean UI, and reusable components for a smooth user experience.",
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
  {
    title: "      ",
    description:
      "      ",
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
export function StickyScrollReveal() {
  return (
    <div className="w-full py-4">
      <h1 className="text-white text-center text-4xl m-10 p-10">My Works</h1>
      <StickyScroll content={content} />
    </div>
  );
}
