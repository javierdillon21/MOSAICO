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
    <div
      className={`flex sticky top-0 z-10 justify-between h-20 w-full px-6 items-center uppercase bg-white text-black font-raleway md:justify-between md:text-lg lg:text-sm `}
    >
      <Link href="/">
        <a className="flex w-44 h-full md:w-60">
          <Image
            className="object-cover object-center"
            src="/logos_mosaico/horizontales_sin_eslogan/original.png"
            width={1000}
            height={1000}
          />
        </a>
      </Link>
      <div
        id="navegacion"
        className="hidden w-full items-center pr-12 justify-end md:flex md:h-navegationbar"
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

          <Link href="/nuestros_servicios">
            <a className="transition-all duration-500 ease-in-out hover:text-secondary text-center">
              Nuestros Servicios
            </a>
          </Link>
        </div>
      </div>
      {/* <div id="SecondaryTabs" className="hidden md:flex items-center "></div> */}

      <div className="flex z-10 relative h-24 w-10 items-center justify-center text-lg text-black md:hidden">
        {/* <p className="text-white text-xs">ESTUDIO ARQUITECTÓNICO</p> */}
        <Menu
          as="div"
          className="absolute flex flex-col h-full w-1/4 items-center justify-center"
        >
          <Menu.Button>
            <FontAwesomeIcon
              icon="bars"
              className="fill-current text-third"
              size="1x"
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
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/nuestros_servicios"
                >
                  Nuestros Servicios
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
