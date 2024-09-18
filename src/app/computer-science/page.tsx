import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function ComputerScience() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-4xl text-center text-white md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            COMPUTER SCIENCE
        </h1>
        <video playsInline src="/videos/computer science.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
        <div className="bg-black absolute w-full h-screen justify-center z-10 opacity-30"></div>
      </div>
      
      {/* White Space */}
      <div className="flex pt-[50px] w-full flex-col justify-center bg-white">

        {/* Title */}
        <h1 className="text-center text-4xl md:text-7xl font-Arimo text-black font-bold py-[50px]">
          PROJECTS
        </h1>

        {/* Content Group: Projects */}
        <div className="flex flex-col py-[30px]">

          {/* Item Group */}
          <div className="flex flex-wrap w-full pb-[40px] md:pb-[50px] justify-start md:justify-center items-center px-[50px] md:px-0">
            {/* Item Content */}
            <div className="flex flex-col w-[900px]">
              <h2 className="text-2xl md:text-3xl font-Arimo text-black font-bold whitespace-pre-line pb-[10px]">PERSONAL WEBSITE</h2>
              <p className="font-Anonymous_Pro text-xl text-black flex-wrap">
                A website used to display public information about Chris Tse and display the developer&apos;s artistic expression. Includes the various facets of the developer.
              </p>
            </div>
            {/* Item Media */}
            <div className=" font-Anonymous_Pro text-xl font-extrabold text-blue-800 flex-wrap pt-[20px] md:pt-0 w-[200px] flex flex-col">
              <div className="flex flex-row"><Link target="_blank" href="https://www.chrisrtse.com/">Website </Link><TbExternalLink/></div>
              <div className="flex flex-row"><Link target="_blank" href="https://github.com/isaiahrashadfan/chrisrtse">Github </Link><TbExternalLink/></div>
            </div>
          </div>

          {/* Item Group */}
          <div className="flex flex-wrap w-full pb-[40px] md:pb-[50px] justify-start md:justify-center items-center px-[50px] md:px-0">
            {/* Item Content */}
            <div className="flex flex-col w-[900px]">
              <h2 className="text-2xl md:text-3xl font-Arimo text-black font-bold whitespace-pre-line pb-[10px]">SMS SPAM TEXT IDENTIFIER</h2>
              <p className="font-Anonymous_Pro text-xl text-black flex-wrap">
                A webtool utilizing OpenAI to determine whether or not a received text message is likely a spam message.
              </p>
            </div>
            {/* Item Media */}
            <div className=" font-Anonymous_Pro text-xl font-extrabold text-blue-800 flex-wrap pt-[20px] md:pt-0 w-[200px] flex flex-col">
              <div className="flex flex-row"><Link target="_blank" href="https://github.com/isaiahrashadfan/sms-scam-identifier">Github </Link><TbExternalLink/></div>
            </div>
          </div>



        </div>

        
      </div>

      
    </main>
  );
}
