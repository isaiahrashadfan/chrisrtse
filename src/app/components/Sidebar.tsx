"use client"
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { useAnimate } from "framer-motion";


export default function Sidebar() {
    const [sidebarVisible,setSidebarVisible] = useState(false)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (sidebarVisible) {
            animate(scope.current, {
                opacity:1,
                translateX: '0%'
            }, { ease : 'linear' }
        )
        }

        else {
            animate(scope.current, {
                opacity:0,
                translateX: '-100%'
            }, { ease : 'linear' }
        )
        }
    }, [sidebarVisible])


    return (
      <div  className="text-3xl w-[55px] h-[55px] fixed justify-start z-50">
          
          {/* Hamburger Button */}
          <Image src={'/sb button.png'} alt="" width={1024} height={1024} onMouseDown={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className={(sidebarVisible ? "invert" : "") + " cursor-pointer absolute pt-[15px] pl-[15px] z-50"}></Image>

          {/* Open Button */}
          <div ref={scope} className={"opacity-0 -translate-x-100 bg-white text-black text-xl md:text-2xl font-Anonymous_Pro font-medium w-[240px] md:w-[350px] h-screen absolute flex flex-col justify-start items-start pt-[80px] pl-[30px] pr-[30px] pb-[50px] space-y-[10px] z-40"}>
            {/* Home Button */}
                <Link href={"/"} onClick={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className=" px-[30px] py-[2.5px] w-full hover:font-bold rounded-md hover:bg-[#707c8da9] bg-opacity-50 hover:text-white">
                    <p>
                        Home
                    </p>
                </Link>

            {/* Computer Science */}
            <Link href={"/portfolio"} onClick={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className=" px-[30px] py-[2.5px] w-full hover:font-bold rounded-md hover:bg-[#707c8da9] bg-opacity-50 hover:text-white">
                <p>
                    Portfolio
                </p>
            </Link>

            {/* Music */}
            <Link href={"/music"} onClick={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className=" px-[30px] py-[2.5px] w-full hover:font-bold rounded-md hover:bg-[#707c8da9] bg-opacity-50 hover:text-white">
                <p>
                    Music
                </p>
            </Link>

            {/* Personal Blog */}
            <Link href={"/personal-blog"} onClick={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className=" px-[30px] py-[2.5px] w-full hover:font-bold rounded-md hover:bg-[#707c8da9] bg-opacity-50 hover:text-white">
                <p>
                    Personal Blog
                </p>
            </Link>

            {/* Photography */}
            <Link href={"/photography"} onClick={()=>{setSidebarVisible(!sidebarVisible) ; console.log(sidebarVisible)}} className=" px-[30px] py-[2.5px] w-full hover:font-bold rounded-md hover:bg-[#707c8da9] bg-opacity-50 hover:text-white">
                <p>
                    Photography
                </p>
            </Link>

            <div className="absolute bottom-[15px] flex flex-row space-x-[20px]">
                {/* Socials Icons */}
                <Link target="_blank" href="https://www.instagram.com/cchristse/"><SiInstagram></SiInstagram></Link>
                <Link target="_blank" href="https://discord.com/users/85194740890337280"><SiDiscord></SiDiscord></Link>
                <Link target="_blank" href="https://www.linkedin.com/in/chris-tse-irf/"><SiLinkedin></SiLinkedin></Link>
                <Link target="_blank" href="https://github.com/isaiahrashadfan"><SiGithub></SiGithub></Link>
                <Link target="_blank" href="https://open.spotify.com/user/natutari?si=9512990e04204690"><SiSpotify></SiSpotify></Link>
            </div>

                
          </div>

          {/* INVISIBLE OFF CLICK LAYER */}
          <div onClick={() => {setSidebarVisible(!sidebarVisible)}} className={(sidebarVisible ? "" : "hidden") + " bg-black opacity-70 w-screen h-screen absolute z-30"}>

          </div>

          
      </div>
    );
  }
  