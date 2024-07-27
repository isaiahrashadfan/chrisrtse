import Image from "next/image";
import { ColumnsPhotoAlbum, RowsPhotoAlbum  } from "react-photo-album";
import "react-photo-album/columns.css";

const photos = [
  { src: "/photos/film_scans/00003328/000033280003.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280004.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280006.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280013.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280014.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280015.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003328/000033280016.jpg", width: 1600, height: 1061 },

  { src: "/photos/film_scans/00003506/000035060003.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060010.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060011.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060012.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060013.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060014.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060015.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060016.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060017.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060018.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060019.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060020.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060021.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060022.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060023.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060024.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060025.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060026.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060027.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060028.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060029.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060030.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060031.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060032.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060033.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060034.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003506/000035060035.jpg", width: 1600, height: 1061 },
];


export default function PersonalBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className="flex min-h-screen flex-col items-center justify-center "> 
        <h1 className="text-4xl text-center md:text-7xl font-Arimo font-bold z-20 pointer-events-none select-none">
            PHOTOGRAPHY
        </h1>
        <video playsInline src="/videos/photo.mp4" autoPlay loop muted preload='auto' width='1280' height='720' className="object-cover absolute w-screen h-screen justify-center z-0 pointer-events-none"></video>
        <div className="bg-black absolute w-full h-screen justify-center z-10 opacity-30"></div>
      </div>

      {/* white space */}
      <div className="pt-[50px] p-10 w-full">
      <ColumnsPhotoAlbum photos={photos} columns={4} />

        {/* <Image alt='' width='1061' height='1600' src={'/photos/film scans/00003328/000033280003.jpg'} ></Image> */}
      </div>
      
    </main>
  );
}
