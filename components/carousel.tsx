import React, { useEffect, useRef, useState } from "react";
import { Carrusel } from "../src/data";
import Image from "next/image";
import gsap from "gsap";

export default function Carousel(props: { carousel: Carrusel }) {
  var [posicion, setPosicion] = useState(0);
  const divref = useRef(null);

  setTimeout(() => {
    setPosicion(posicion + 1 == props.carousel.length ? 0 : posicion + 1);
  }, 10000);

  useEffect(() => {
    gsap.fromTo(
      divref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, [posicion]);

  useEffect(() => {}, [posicion]);
  return (
    <>
      <div className="relative flex h-full w-full bg-black" ref={divref}>
        <Image
          objectFit="cover"
          src={props.carousel[posicion].portada.url}
          width={4096}
          height={2160}
        />
        {/* <span className="absolute flex h-full w-full bg-black opacity-50"></span> */}
      </div>

      {/* <button
        className="border-2 "
        onClick={() => {
          clearTimeout(timeid);
          NewT;
        }}
      >
        SIGUIENTE
      </button> */}
    </>
  );
}
