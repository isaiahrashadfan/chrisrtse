import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-2xl font-Anonymous_Pro font-medium w-full h-[70px] absolute z-30 flex flex-row justify-center items-center space-x-[70px]">
        {/* Home, Computer Science, Music, Personal Blog */}

        {/* Home Button */}
        <Link href={"/"}>
                <p>
                    Home
                </p>
            </Link>

            {/* Computer Science */}
            <Link href={"/computer-science"}>
                <p>
                    Computer Science
                </p>
            </Link>

            {/* Music */}
            <Link href={"/music"}>
                <p>
                    Music
                </p>
            </Link>

            {/* Personal Blog */}
            <Link href={"/personal-blog"}>
                <p>
                    Personal Blog
                </p>
            </Link>

        
    </div>
  );
}
