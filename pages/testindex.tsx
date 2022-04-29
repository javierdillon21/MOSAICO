import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import cliente from "../src/prismic/prismic-configuration";
import { Carrusel, Imagen, ResultsPrismic, Slide, Texto } from "../src/data";
import { animateScroll as scroll } from "react-scroll";
import Prismic from "@prismicio/client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../components/carousel";
import gsap from "gsap";
import { useTransition, animated } from "@react-spring/web";

export default function Inicio() {
  var [carrusel, setCarrusel] = useState<Carrusel>();
  var [posicion, setPosicion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(posicion, {
    key: posicion,
    from: {},
    enter: { opacity: 1 },
  });

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

  // if (carrusel != undefined) {
  //   var timerID = setTimeout(() => {
  //     setPosicion(
  //       posicion + 1 == (carrusel as Carrusel).length ? 0 : posicion + 1
  //     );
  //   }, 10000);
  // }

  if (!carrusel) return <></>;
  return (
    <>
      {/* <Carousel carousel={carrusel}></Carousel> */}
      <div className="relative flex h-full w-full ">
        {transition(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <Image
                  objectFit="cover"
                  src={(carrusel as Carrusel)[posicion].portada.url}
                  width={4096}
                  height={2160}
                />
              </animated.div>
            )
        )}
        {/* <span className="absolute flex h-full w-full bg-black opacity-50"></span> */}
      </div>

      {/* DESCRIPCION FLOTANTE*/}
      <div className="absolute flex flex-col inset-y-1/3 md:inset-y-1/4 gap-10 py-4 w-full h-96 md:h-auto sm:w-1/3 items-center justify-center bg-black bg-opacity-50 border-gray-300 text-gray-100">
        <div className="flex flex-col w-full items-center gap-y-4 ">
          <Link href={`/${carrusel[posicion].idProyecto}`}>
            <p className="flex w-3/4 text-5xl md:text-7xl font-black text-center justify-center md:justify-start font-poppins md:text-left">
              {carrusel[posicion].nombre}
            </p>
          </Link>
          <span className="flex w-3/4 text-sm font-normal text-gray-50 text-center md:text-left">
            <p className="flex w-full">{carrusel[posicion].descripcion}</p>
          </span>
          {/* <p className="flex w-1/2 text-gray-100 text-left font-extrabold">
            {carrusel[posicion].categoria}
          </p> */}
        </div>
        <div className="flex border-b border-opacity-5 w-full"></div>
        <button
          className="flex absolute bottom-0 right-0 h-12 w-12 items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon
            icon="arrow-right"
            stroke="1"
            size="lg"
            color="white"
          />
        </button>
        <button
          className="flex absolute bottom-0 left-0 h-12 w-12 items-center justify-center"
          disabled={false}
          onClick={(e) => {
            e.preventDefault();

            setPosicion(
              posicion - 1 == -1
                ? (carrusel as Carrusel).length - 1
                : posicion - 1
            );
          }}
        >
          <FontAwesomeIcon icon="arrow-left" size="lg" color="white" />
        </button>
      </div>
    </>
  );
}
function FormatearTexto(arr: Array<Texto>) {
  const strArr = arr.map((obj) => obj.text);
  return strArr.join("\n");
}
