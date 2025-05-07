import Image from "next/image";

export default function Music() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-4xl text-center text-white md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            MUSIC
        </h1>
        <video playsInline src="/videos/music.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
        <div className="bg-black absolute w-full h-screen justify-center z-10 opacity-30"></div>
      </div>
      
      <div className="flex pt-[50px] w-full flex-col items-center justify-center bg-white">
        
        {/* Title */}
        <h1 className="text-center text-4xl md:text-7xl font-Arimo text-black font-bold py-[50px]">
          MY TASTE PROFILE
        </h1>

        {/* SPOTIFY EMBED BLOCKS */}
        <div className="flex flex-col md:flex-row md:space-x-[50px] py-[30px]">
            <div className="flex flex-col pb-[50px] md:pb-[20px]">
              <h2 className="text-center text-2xl md:text-3xl font-Arimo text-black font-bold whitespace-pre-line pb-[10px]">ROTATION PLAYLIST</h2>
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/1npKzMZw2SUywudpx6pVGt?utm_source=generator" width="352" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            
            <div className="flex flex-col pb-[50px] md:pb-[20px]">
              <h2 className="text-center text-2xl md:text-3xl font-Arimo text-black font-bold whitespace-pre-line pb-[10px]">FAVORITE ARTIST</h2>
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/artist/6aaMZ3fcfLv4tEbmY7bjRM?utm_source=generator" width="352" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div className="flex flex-col pb-[50px] md:pb-[20px]">
              <h2 className="text-center text-2xl md:text-3xl font-Arimo text-black font-bold whitespace-pre-line pb-[10px]">RECOMMENDED SONG</h2>
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/5tHipIzrGqcoZ4ovlW1Aip?utm_source=generator" width="352" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>

      </div>
      
    </main>
  );
}
