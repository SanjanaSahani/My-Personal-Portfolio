import { HoverEffect } from "@/components/ui/card-hover-effect"

export function CardHoverEffect() {
  return (
    <div className=" px-8 bg-black">
        <h1 className="text-white text-center text-4xl mt-32 p-10">Services</h1>
      <HoverEffect className="max-w-5xl mx-auto" items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Frontend Developer",
    description:
      "I craft stunning, user-friendly interfaces that elevate digital experiences. From sleek landing pages to complex web apps, I use modern frameworks to deliver fast, responsive, and visually engaging solutions that leave a lasting impression.",
    link: "/frontend-developer",
  },
  {
    title: "Web Developer",
    description:
      "I deliver powerful, fully functional websites tailored to your needs. Whether it's a simple website or a dynamic platform UI, I ensure seamless performance, responsiveness, and a smooth user experience across all devices.",
    link: "/web-developer",
  },
  {
    title: "Software Developer",
    description:
      "I build efficient and scalable software solutions focused on clean code, performance, and usability. I enjoy solving real-world problems through well-structured and maintainable applications.",
    link: "/software-developer",
  },
  {
    title: "Data Analyst",
    description:
      "I transform raw data into meaningful insights using analysis and visualization techniques, helping improve decision-making and uncover hidden patterns.",
    link: "/data-analyst",
  },
  {
    title: "UI/UX Designer",
    description:
      "I design intuitive and visually appealing user experiences with a focus on usability, accessibility, and modern design principles to create engaging digital products.",
    link: "/ui-ux-designer",
  },
  {
    title: "Problem Solver",
    description:
      "I enjoy solving logical and technical problems using programming and analytical thinking, focusing on writing clean and efficient solutions.",
    link: "/problem-solver",
  },
];
