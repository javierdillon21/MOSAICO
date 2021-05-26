import Image from "next/image";
import { useState, useEffect } from "react";
import cliente from '../src/prismic/prismic-configuration';
import { Carrusel, Imagen, ResultsPrismic, Slide, Texto } from "../src/data";
import Prismic from '@prismicio/client';
import Link from "next/link";

export default function Inicio() {
  var direcciones = ['/SALITA DE LECTURA.jpg', '/DEPARTAMENTO GRANDE - COCINA GENERAL.effectsResult.effectsResult.jpg', '/MODULAR TV SAN ISISDRO.effectsResult.jpg']
  var [carrusel, setCarrusel]= useState<Carrusel>()
  var [posicion, setPosicion] = useState(0);


  useEffect(()=>{
    cliente().query(
      Prismic.Predicates.at('document.id', "YKBmhRIAACEAwG_i")
  ).then(function (response: { results: ResultsPrismic }) {
      // response is the response object, response.results holds the documents
      const docCarrusel = response.results[0];
      console.log('RESPONSE:', docCarrusel);

      var arr=docCarrusel.data.body.map((slice)=>{
        var img:Imagen={
          dimensions: slice.primary.portada.dimensions,
          url: slice.primary.portada.url
        }
        var sl:Slide={
          portada: img,
          nombre: slice.primary.nombre[0].text,
          categoria: slice.primary.categoria,
          descripcion: FormatearTexto(slice.primary.descripcion),
          idProyecto: slice.primary.link.id
        }
        return sl
      });
      setCarrusel(arr);
  });
  },[])

  useEffect(() => {
    setTimeout(() => {
      setPosicion(
        posicion + 1 == direcciones.length ? 0 : posicion + 1
      );
    }, 5000);
  });

    if(!carrusel) return <></>
  return (

    <div className="relative flex h-portada w-auto ">

      <Image className="object-cover object-center"
        src={carrusel[posicion].portada.url}
        width={carrusel[posicion].portada.dimensions.width}
        height={carrusel[posicion].portada.dimensions.height}
      />

      <div className="absolute flex flex-col w-1/5 inset-y-1/4 ml-16 font-title">
        
      <Link href={`/${carrusel[posicion].idProyecto}`}>
        <a>
          <p className="text-7xl w-2/3 font-bold transition all duration-500 ease-in-out hover:text-secondary"> 
            {carrusel[posicion].nombre}</p>
        </a>
        </Link>
       
        <p className="text-xl ">
          {carrusel[posicion].categoria}</p>
        <p className="text-lg mt-8 text-justify">
          {carrusel[posicion].descripcion}</p>
      </div>
      
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

        function FormatearTexto(arr: Array<Texto>) {
          const strArr = arr.map((obj) => obj.text)
          return strArr.join('\n')
      }