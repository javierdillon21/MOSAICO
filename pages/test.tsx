import Image from "next/image";
import Carrusell from "../components/carousel";
import { useState, useEffect, useRef } from "react";
import cliente from "../src/prismic/prismic-configuration";
import { Carrusel, Imagen, ResultsPrismic, Slide, Texto } from "../src/data";
import Prismic from "@prismicio/client";

export default function Inicio() {
  const [carrusel, setCarrusel] = useState<Carrusel>();
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
  
  if (!carrusel) return <></>;
  return (
    <>
     <Carrusell carousel={carrusel}/>
    </>
  );
}
function FormatearTexto(arr: Array<Texto>) {
  const strArr = arr.map((obj) => obj.text);
  return strArr.join("\n");
}
