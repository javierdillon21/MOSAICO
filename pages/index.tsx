import Image from "next/image";
import { useState, useEffect } from "react";
import cliente from "../src/prismic/prismic-configuration";
import { Carrusel, Imagen, ResultsPrismic, Slide, Texto } from "../src/data";
import Prismic from "@prismicio/client";
import Link from "next/link";

export default function Inicio() {
  var [carrusel, setCarrusel] = useState<Carrusel>();
  var [posicion, setPosicion] = useState(0);

  useEffect(() => {
    cliente()
      .query(Prismic.Predicates.at("document.id", "YKBmhRIAACEAwG_i"))
      .then(function (response: { results: ResultsPrismic }) {
        // response is the response object, response.results holds the documents
        const docCarrusel = response.results[0];
        console.log("RESPONSE:", docCarrusel);

        var arr = docCarrusel.data.body.map((slice) => {
          var img: Imagen = {
            dimensions: slice.primary.portada.dimensions,
            url: slice.primary.portada.url,
          };
          var sl: Slide = {
            portada: img,
            nombre: slice.primary.nombre[0].text,
            categoria: slice.primary.categoria,
            descripcion: FormatearTexto(slice.primary.descripcion),
            idProyecto: slice.primary.link.id,
          };
          return sl;
        });
        setCarrusel(arr);
      });
  }, []);

  if (carrusel != undefined) {
    setTimeout(() => {
      setPosicion(
        posicion + 1 == (carrusel as Carrusel).length ? 0 : posicion + 1
      );
    }, 5000);
  }

  if (!carrusel) return <></>;
  return (
    <div className="flex flex-col w-screen h-full md:absolute">
      <div className="relative flex h-screen w-screen">
        <Image
          className="object-cover"
          src={carrusel[posicion].portada.url}
          width={carrusel[posicion].portada.dimensions.width}
          height={carrusel[posicion].portada.dimensions.height}
        />
      </div>
      <div className="absolute flex flex-col inset-y-1/4 gap-8 py-4 md:w-1/2 md:inset-y-1/4 md:ml-16 md:p-8 md:shadow-2xl lg:w-2/5 xl:w-96 items-center justify-center bg-white bg-opacity-60 font-title text-black">
        <div className="flex flex-col max-w-1/2 lg:max-w-90p items-center">
          <Link href={`/${carrusel[posicion].idProyecto}`}>
            <a>
              <p className="flex text-6xl font-bold text-center">
                {carrusel[posicion].nombre}
              </p>
            </a>
          </Link>
          <p className="flex text-gray-700 text-center">
            {carrusel[posicion].categoria}
          </p>
        </div>
        <p className="max-w-80p text-justify overflow-scroll xl:overflow-hidden text-lg">
          {carrusel[posicion].descripcion}
        </p>
      </div>
      <div className="flex flex-col w-screen h-screen text-4xl text-center justify-center items-center font-title bg-white md:hidden">
        <Link href="/proyectos">
          <a className="flex flex-1 w-screen justify-center items-center border-gray-500 border-b">
            <p>Proyectos</p>
          </a>
        </Link>
        <Link href="/sobre_nosotros">
          <a className="flex flex-1 w-screen justify-center items-center border-gray-500 border-b">
            <p>Sobre Nosotros</p>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-1 w-screen justify-center items-center border-gray-500 border-b">
            <p>Contacto</p>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-1 w-screen justify-center items-center border-gray-500 border-b">
            <p>Nuestros Servicios</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
function FormatearTexto(arr: Array<Texto>) {
  const strArr = arr.map((obj) => obj.text);
  return strArr.join("\n");
}
