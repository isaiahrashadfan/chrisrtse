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

  { src: "/photos/film_scans/00003507/000035070001.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070002.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070003.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070004.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070005.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070006.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070007.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070008.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070009.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070010.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070011.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070012.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070013.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070014.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070015.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070016.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070017.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070018.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070019.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070020.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070021.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070022.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070023.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070024.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070025.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070026.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070027.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070028.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070029.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070030.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070031.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070032.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070033.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003507/000035070034.jpg", width: 1600, height: 1061 },

  { src: "/photos/film_scans/00003508/000035080003.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080004.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080005.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080006.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080007.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080009.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080010.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080011.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080012.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080013.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080014.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080015.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080016.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080017.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080018.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080019.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080020.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080021.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080022.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080023.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080025.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080026.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080027.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080028.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080029.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080030.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080035.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080036.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003508/000035080037.jpg", width: 1600, height: 1061 },

  { src: "/photos/film_scans/00003509/000035090001.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090003.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090004.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090005.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090006.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090011.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090012.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090013.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090018.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090019.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090020.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090022.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090023.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090024.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090025.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090026.jpg", width: 1061, height: 1600 },
  { src: "/photos/film_scans/00003509/000035090027.jpg", width: 1061, height: 1600 },
  { src: "/photos/film_scans/00003509/000035090030.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090031.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090032.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090033.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090034.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090035.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090036.jpg", width: 1600, height: 1061 },
  { src: "/photos/film_scans/00003509/000035090037.jpg", width: 1600, height: 1061 },
  

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

        {/* <Image alt='' width='1061' height='1600' src={'/photos/film scans/00003328/000033280003.jpg'} ></Image> */}
      </div>
      
    </main>
  );
}
