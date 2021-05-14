import Image from "next/image";
import { useState, useEffect } from "react";

export default function Inicio() {
  var direcciones = ['/SALITA DE LECTURA.jpg', '/DEPARTAMENTO GRANDE - COCINA GENERAL.effectsResult.effectsResult.jpg', '/MODULAR TV SAN ISISDRO.effectsResult.jpg']
  var [posicion, setPosicion] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPosicion(
        posicion + 1 == direcciones.length ? 0 : posicion + 1
      );
    }, 5000);
  });

  return (

    <div className="flex h-portada w-auto ">
      <Image className="object-cover object-center"
        src={direcciones[posicion]}
        width={2000}
        height={1000}
      />
    </div>
  );
}

{/* <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24">
          <path d="M0 0h24v24H0V0z"
            fill="none" />
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg> */}