import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero */}
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            CHRIS TSE
        </h1>
        <div className="bg-black absolute w-screen h-screen justify-center z-10 opacity-15"></div>
        <video src="cropped_video.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
      </div>

      
    </main>
  );
}
