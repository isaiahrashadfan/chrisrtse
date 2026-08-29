import Image from "next/image";
import { ColumnsPhotoAlbum, RowsPhotoAlbum  } from "react-photo-album";
import "react-photo-album/columns.css";


const photos = [
  { src: "/photos/film_scans/00003328/000033280003.jpg", width: 1600, height: 1061 },
];


export default function PersonalBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-4xl text-center text-white md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            PHOTOGRAPHY
        </h1>
        <video playsInline src="/videos/photo.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
        <div className="bg-black absolute w-full h-screen justify-center z-10 opacity-30"></div>
      </div>

      {/* white space */}
      <div className="pt-[50px] p-10 w-full">
      <ColumnsPhotoAlbum photos={photos} columns={4} />

        <Image alt='' width='1061' height='1600' src={'/photos/film scans/00003328/000033280003.jpg'} ></Image>
      </div>
      
    </main>
  );
}
