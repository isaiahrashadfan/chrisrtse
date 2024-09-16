import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Hero */}
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="bg-black top-0 absolute w-full h-screen justify-center z-10 opacity-25"></div>
        <h1 className="text-4xl text-center text-black md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            CHRIS TSE
        </h1>
        <video playsInline src="/videos/cropped_video.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
      </div>
      
      
    </main>
  );
}
