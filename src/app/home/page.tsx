"use client"
import Aurora from "@/Backgrounds/Aurora/Aurora";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function Home() {
    const [, setIsHovering] = useState(false);

    const handleEmail = () => {
      window.location.href = `mailto:nattawat.nattachanasit@gmail.com`;
    };
    return (
        <section id="home" className="w-full h-screen flex items-center justify-center">
        <div className="w-full h-full text-white">
          <div className="relative overflow-hidden items-center justify-center w-full h-full max-w-full max-h-full">
            <div className="fixed h-full w-full">
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                speed={1}
              />
            </div>

            <div className="flex z-50">
              <div className="fixed bg-white/10 border border-white/40 m-4 pl-5 pr-3 py-2 rounded-full font-bold">
                <div className="flex justify-between items-center space-x-36">
                  <p>jemiezler.</p>
                  <Button className="bg-white text-black rounded-full py-1 px-3" onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)} onPress={handleEmail}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full flex-1 items-center justify-center z-50">
              <div className="w-1/2 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent relative z-10">
                <p className="text-xl">Hi, I&rsquo;m </p>
                <p className="text-7xl">
                  Nattawat<br /><span className="font-light">Nattachanasit.</span>
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-sm text-medium bg-white/80 text-justify bg-clip-text text-transparent relative z-10">
                  A software engineering student with a passion for crafting innovative solutions across multiple domains. My journey in tech has led me to work on a diverse range of projects—from developing prediction models that harness the power of data to creating seamless frontend and backend systems. <br /><br />I have also explored building responsive mobile and web applications, each project refining my skills and fueling my drive to solve real-world challenges.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}