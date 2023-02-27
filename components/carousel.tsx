import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Carrusel } from "../src/data";

export default function Carrusell(props: { carousel: Carrusel }) {
  var [posicion, setPosicion] = useState(0);
  const slideshow= useRef(null)
  const intervalslideshow= useRef(null)


  useEffect(() => {
    setInterval(()=>{
      setPosicion(
        posicion + 1 == (props.carousel as Carrusel).length ? 0 : posicion + 1
      );
    },2000)
  }, []);

  return (
    <>
      <div className="relative flex h-full w-full bg-black" ref={slideshow}>
        <Image
          objectFit="cover"
          src={props.carousel[posicion].portada.url}
          width={4096}
          height={2160}
        />
        {/* <span className="absolute flex h-full w-full bg-black opacity-50"></span> */}
      </div>

      {/* DESCRIPCION FLOTANTE*/}
      <div className="absolute flex flex-col inset-y-1/3 md:inset-y-1/4 gap-10 py-4 w-full h-96 md:h-auto sm:w-1/3 items-center justify-center bg-black bg-opacity-50 border-gray-300 text-gray-100">
        <div
          className="flex flex-col w-full items-center gap-y-4 "
        >
          <p className="flex w-3/4 text-5xl md:text-7xl animate-fade-in-down font-black text-center justify-center md:justify-start font-poppins md:text-left">
            {props.carousel[posicion].nombre}
          </p>
          {/* <Link href={`/${carousel[posicion].idProyecto}`}>
          </Link> */}
          <span
            className="flex w-3/4 text-sm lg:text-xl font-normal text-gray-50 text-center md:text-left"
          >
            <p className="flex w-full">{props.carousel[posicion].descripcion}</p>
          </span>
          {/* <p className="flex w-1/2 text-gray-100 text-left font-extrabold">
            {carousel[posicion].categoria}
          </p> */}
        </div>
        <div
          className="flex border-b border-opacity-5 w-full"
        ></div>
      </div>
    </>
  );
}
