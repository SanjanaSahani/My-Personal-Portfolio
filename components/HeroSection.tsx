import Link from "next/link"
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Vortex } from "./ui/vortex";


function HeroSection() {
  return (
    
    <div
      className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >

      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="p-4 relative z-10 w-full text-center" >
            <h3 className="text-white">L I G N</h3>
          <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400"
          ><span className="text-xl">Hi, My Name is </span> <br /> Sanjana Sahani</h1>
          <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          >I'm a Developer . My expertise is to create, design and develop Websites.</p>
          <div className="mt-4">
            <Link href={"/"}>
              <div className="flex justify-center text-center border-blue-900-100">
                <HoverBorderGradient
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 border-blue-900 border-2"
                >
                  <span>HIRE ME</span>
                </HoverBorderGradient>
              </div>
            </Link>
          </div>
        </div>
        </Vortex>       
    </div>
  )
}


export default HeroSection
