import Image from "next/image";

export default function PersonalBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-4xl text-center text-white md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            PERSONAL BLOG
        </h1>
        <video playsInline src="/videos/blog.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
        <div className="bg-black absolute w-full h-screen justify-center z-10 opacity-30"></div>
      </div>

      {/* about me */}
      <div className="flex pt-[50px] w-full flex-col items-center justify-center bg-white">
        
        {/* Title */}
        <h1 className="text-center text-4xl md:text-7xl font-Arimo text-black font-bold pt-[50px] pb-[120px]">
          NOTHING HERE YET
        </h1>

        {/* Body */}
        <p className="text-xl text-center md:text-2xl font-Anonymous_Pro text-black font-bold py-[30px] whitespace-pre-line">
          {"Please be patient\!\n🙇‍♂️🙇‍♂️🙇‍♂️"}
        </p>

        
      </div>
      
    </main>
  );
}
