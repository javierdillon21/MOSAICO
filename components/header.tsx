import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="flex absolute px-8 md:static xl:absolute z-10 lg:bg-white text-third font-title  md:text-lg lg:text-xl justify-center md:justify-between h-navegationbar max-h-navegationbar w-screen ">
      <div className="flex w-28 md:static md:w-32">
        <Image
          className="object-scale-down object-center"
          src="/LOGO MOSAICO ALT APP BLACK.png"
          width={5231}
          height={1512}
        />
      </div>
      <div
        id="navegacion"
        className="hidden w-screen bg-white items-center justify-center md:flex md:h-navegationbar"
      >
        <div
          id="PrimaryTabs"
          className="grid grid-cols-4 gap-14 w-auto place-content-center justify-items-center items-center text-center"
        >
          <Link href="/">
            <a className="flex transition all duration-500 ease-in-out hover:text-secondary">
              Inicio
            </a>
          </Link>
          <Link href="/proyectos">
            <a className="flex transition all duration-500 ease-in-out hover:text-secondary">
              Proyectos
            </a>
          </Link>
          <Link href="/sobre_nosotros">
            <a className="flex transition all duration-500 ease-in-out hover:text-secondary">
              Sobre Nosotros
            </a>
          </Link>
          <Link href="/">
            <a className="flex transition all duration-500 ease-in-out hover:text-secondary">
              Contacto
            </a>
          </Link>
        </div>
      </div>
      <div id="SecondaryTabs" className="hidden md:flex items-center ">
        <Link href="/">
          <a className="transition-all duration-500 ease-in-out hover:text-secondary text-center">
            Nuestros Servicios
          </a>
        </Link>
      </div>
    </header>
  );
}
