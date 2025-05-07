import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden md:flex text-2xl font-Anonymous_Pro text-white font-medium w-full h-[70px] absolute z-30 flex-row justify-center items-center space-x-[70px]">
        {/* Home, Computer Science, Music, Personal Blog */}

        {/* Home Button */}
        <Link href={"/"}>
                <p>
                    Home
                </p>
            </Link>

            {/* Computer Science */}
            <Link href={"/portfolio"}>
                <p>
                    Portfolio
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

            {/* Photography */}
            <Link href={"/photography"}>
                <p>
                    Photography
                </p>
            </Link>
    </div>
  );
}
