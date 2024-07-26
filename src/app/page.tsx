import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Hero */}
      <div className="flex min-h-screen flex-col items-center justify-center"> 
        <h1 className="text-4xl text-center md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            CHRIS TSE
        </h1>
        <div className="bg-black top-0 absolute w-full h-full justify-center z-10 opacity-25"></div>
        <video playsInline src="cropped_video.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
      </div>
      {/* about me */}
      <div className="flex pt-[100px] w-full flex-col items-center justify-center bg-gradient-to-b from-black via-gray-500 to-white">
        <h1 className="text-center text-4xl md:text-7xl font-Arimo text-black font-bold pt-[150px]">
          COMING SOON 🤯
        </h1>
        <p className="text-2xl text-center md:text-xl pb-[30px] font-Anonymous_Pro text-black font-bold pt-[150px] whitespace-pre-line">
          {"Please be patient\!\n🙇‍♂️🙇‍♂️🙇‍♂️"}
        </p>
      </div>
      
    </main>
  );
}
