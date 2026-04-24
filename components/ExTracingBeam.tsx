"use client";
import { TracingBeam } from "./ui/tracing-beam";

export function ExTracingBeam() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-5xl mx-auto antialiased pt-4 relative">
        <h1 className="text-white text-4xl text-center p-10"> Experiences</h1>
        {textContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 mt-6 flex">
            <div style={{ fontSize: "25px", marginRight: "250px" }} className="text-white">{item.date}</div>
            
             <div>
               <h2 className="bg-black text-white rounded-full text-2xl w-fit px-4 py-1 mb-4">
                {item.role}
              </h2>

              <p className="text-md mb-6 bg-linear-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                @{item.company}
              </p>

              <div className="text-sm text-white">
                {item.description}
              </div>
             </div>
           
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const textContent = [
  {
    date: "feb 2026 - Mar 2026",
    role: "Frontend Development Intern",
    company: "Saiket Systems",
    description: (
      <>
        <p>
        ▶  Built responsive UI components using React and Tailwind.<br />
        ▶  Improved website performance and load times.<br />
        ▶  Integrated REST APIs for dynamic data rendering.<br />
        ▶  Worked closely with designers for pixel-perfect UI.<br />
        </p>
      </>
    ),
  },
  {
    date: "Oct 2025 - Nov 2026",
    role: "Frontend Development Intern",
    company: "Cognifyz Technologies",
    description: (
      <>
        <p>
        ▶  Developed reusable UI components.<br />
        ▶  Optimized applications for maximum speed.<br />
        ▶  Ensured cross-browser compatibility.<br />
        ▶  Maintained clean and scalable code.<br />
        </p>
      </>
    ),
  },
  {
    date: "Nov 2024 - Dec 2024",
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    description: (
      <>
        <p>
        ▶  Converted Figma designs into responsive web pages.<br />
        ▶  Handled state management in React apps.<br />
        ▶  Improved accessibility and UX.<br />
        ▶  Debugged and fixed UI issues.<br />
        </p>
      </>
    ),
  },
  {
    date: "Mar 2024 - Apr 2024",
    role: "Frontend Development Intern",
    company: "Tech Certify Solutions",
    description: (
      <>
        <p>
        ▶  Created mobile-first layouts.<br />
        ▶  Collaborated with backend teams for integration.<br />
        ▶  Used Tailwind for rapid UI development.<br />
        ▶  Tested UI across multiple devices.<br />
        </p>
      </>
    ),
  },
  {
    date: "Oct 2023 - Nov 2023",
    role: "Web Development Intern",
    company: "Unified Mentors Pvt Ltd",
    description: (
      <>
        <p>
        ▶  Developed full-stack features using MERN stack.<br />
        ▶  Worked on database schema design.<br />
        </p>
      </>
    ),
  },
  {
    date: "July 2023 - Aug 2023",
    role: "Web Development Intern",
    company: "CodSoft",
    description: (
      <>
        <p>
        ▶  Built dynamic websites using JavaScript.<br />
        ▶  Implemented authentication and user flows.<br />
        </p>
      </>
    ),
  }
];
