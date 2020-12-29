import Image from "next/image";
import { useState, useEffect } from "react";

export default function IndexPage() {
  var direcciones = ['/SALITA DE LECTURA.jpg','/DEPARTAMENTO GRANDE - COCINA GENERAL.effectsResult.effectsResult.jpg' ,'/MODULAR TV SAN ISISDRO.effectsResult.jpg']
  var [posicion, setPosicion] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPosicion((posicion) =>
        posicion + 1 == direcciones.length ? 0 : ++posicion
      );
    }, 10000);
  }, []);

  return (

    <div className="flex flex-row  justify-bottom items-center ">
      
      <Image
        src= {direcciones[posicion]}
        width={1280}
        height={672}
      />

    </div>
  );
}
