import Image from "next/image";
import Link from "next/link";
import mainVisual from "/public/storeSiteDemoImg/mainVisual.jpg";
import logo from "/public/storeSiteDemoImg/logo.svg";

export function HeaderContent() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <Image
        className="pointer-events-none"
        src={mainVisual}
        layout="fill"
        objectFit="cover"
        alt="mainVisual"
      />
      <nav className="absolute right-12 top-6">
        <ul className="flex gap-x-8 font-Helvetica font-bold text-white shadow-black text-shadow">
          <Link className=" duration-300 hover:text-red-600" href="/">
            <ll>MENU</ll>
          </Link>
          <Link className="duration-300 hover:text-red-600" href="/">
            <ll>ABOUT</ll>
          </Link>
          <Link className="duration-300 hover:text-red-600" href="/">
            <ll>LOCATION</ll>
          </Link>
        </ul>
      </nav>
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 drop-shadow-white">
        <Image src={logo} alt="logo" />
      </div>
    </header>
  );
}
