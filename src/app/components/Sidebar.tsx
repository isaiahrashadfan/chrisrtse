"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";


export default function Sidebar() {
    const [sidebarVisible,setSidebarVisible] = useState(false)
    return (
      <div className="text-3xl w-[55px] h-[55px] fixed justify-start z-50">
          
          {/* Hamburger Button */}
          <Image src={'/sb button.png'} alt="" width={1024} height={1024} onMouseDown={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className={(sidebarVisible ? "invert" : "") + " cursor-pointer absolute pt-[15px] pl-[15px] z-50"}></Image>

          {/* Open Button */}
          <div className={(sidebarVisible ? "" : "hidden") + " bg-white text-black text-2xl font-Anonymous_Pro font-medium w-[350px] h-screen absolute flex flex-col justify-start items-start pt-[70px] pl-[30px] space-y-[10px] z-40"}>
            {/* Home Button */}
            <Link href={"/"}>
                <p>
                    Home
                </p>
            </Link>

            {/* Computer Science */}
            <Link href={"/computer-science"}>
                <p>
                    Computer Science
                </p>
            </Link>

            {/* Music */}
            <Link href={"/music"}>
                <p>
                    Music
                </p>
            </Link>

            {/* Personal Blog */}
            <Link href={"/personal-blog"}>
                <p>
                    Personal Blog
                </p>
            </Link>

            <div className="absolute bottom-[15px] flex flex-row space-x-[20px]">
                {/* Socials Icons */}
                <Link target="_blank" href="https://www.instagram.com/cchristse/"><SiInstagram></SiInstagram></Link>
                <Link target="_blank" href="https://discord.com/users/85194740890337280"><SiDiscord></SiDiscord></Link>
                <Link target="_blank" href="https://www.linkedin.com/in/chris-tse-irf/"><SiLinkedin></SiLinkedin></Link>
                <Link target="_blank" href="https://github.com/isaiahrashadfan"><SiGithub></SiGithub></Link>
            </div>
          </div>
      </div>
    );
  }
  