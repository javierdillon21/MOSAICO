import React, { useEffect, useState } from "react";
import { Carrusel } from "../src/data";
import Image from "next/image";

export default function Carousel(props: { carousel: Carrusel }) {
  var [posicion, setPosicion] = useState(0);
  useEffect(() => {}, []);

  setTimeout(() => {
    setPosicion(posicion + 1 == props.carousel.length ? 0 : posicion + 1);
  }, 5000);
  return (
    <>
      <span className="flex h-full">
        <Image
          className="object-cover"
          src={props.carousel[posicion].portada.url}
          width={props.carousel[posicion].portada.dimensions.width}
          height={props.carousel[posicion].portada.dimensions.height}
        />
      </span>
      <button
        className="border-2 "
        onClick={() =>
          setPosicion(posicion + 1 == props.carousel.length ? 0 : posicion + 1)
        }
      >
        SIGUIENTE
      </button>
    </>
  );
}
