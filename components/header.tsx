import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState(true);
  const router = useRouter().asPath;
  useEffect(() => {
    if (router !== "/") {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, [router]);

  return (
    <header
      className={`flex ${
        isHomePage ? "absolute z-10" : "sticky"
      } px-8 md:sticky lg:bg-white text-third font-title md:text-lg lg:text-xl justify-left md:justify-between h-navegationbar max-h-navegationbar w-screen`}
    >
      <Link href="/">
        <a className="flex w-28 md:static md:w-32">
          <Image
            className="object-scale-down object-center"
            src="/LOGO MOSAICO ALT APP BLACK.png"
            width={5231}
            height={1512}
          />
        </a>
      </Link>
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

      <div className="flex absolute h-full w-15p right-0 items-center justify-center text-lg text-black md:hidden">
        <Menu
          as="div"
          className="relative flex flex-col h-full w-full items-center justify-center"
        >
          <Menu.Button>
            <FontAwesomeIcon
              icon="bars"
              className="fill-current text-black"
              size="lg"
            />
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute flex flex-col top-3/4 right-0 h-auto w-56 p-4 gap-4 bg-white border-third border border-opacity-75"
          >
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href="/proyectos">
                  Proyectos
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/sobre_nosotros"
                >
                  Sobre nosotros
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href="/">
                  Contacto
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href="/">
                  Nuestros Servicios
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
}
