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
        <div className="relative flex w-screen h-screen">
            <Image className="absolute filter brightness-45 filter contrast-125 object-cover"
              src={carrusel[posicion].portada.url}
              width={carrusel[posicion].portada.dimensions.width}
              height={carrusel[posicion].portada.dimensions.height}
            />

            <div className="absolute inset-y-1/4 flex flex-col items-center justify-center gap-8 font-title text-white">
              <div className="flex flex-col max-w-1/2 items-center text-center">
              <Link href={`/${carrusel[posicion].idProyecto}`}>
            <a>
              <p className="flex text-6xl font-bold "> 
                {carrusel[posicion].nombre}</p>
            </a>
              </Link>
              <p className="text-primary">
                  {carrusel[posicion].categoria}</p>
              </div>
              <p className="max-w-3/4 text-center text-lg">
                {carrusel[posicion].descripcion}</p>
         </div>
         
         
            
        </div>
    // <div className="relative flex w-full h-sm lg:h-portada lg:w-auto ">

    //   <Image className="object-cover object-center"
    //     src={carrusel[posicion].portada.url}
    //     width={carrusel[posicion].portada.dimensions.width}
    //     height={carrusel[posicion].portada.dimensions.height}
    //   />
    //     <div className="absolute flex bottom-1 w-4/5 sm:w-auto lg:w-1/5 lg:inset-y-1/4 lg:ml-16 rounded-xl bg-white opacity-50 shadow-2xl"></div>
    //   <div className="absolute flex flex-col lg:w-1/5 lg:inset-y-1/4 lg:ml-16 lg:p-8 justify-center rounded-xl text-black font-title ">
        
    //   <Link href={`/${carrusel[posicion].idProyecto}`}>
    //     <a>
    //       <p className="flex text-xl lg:text-6xl w-2/3 font-bold sm:text-4xl transition all duration-500 ease-in-out hover:text-secondary"> 
    //         {carrusel[posicion].nombre}</p>
    //     </a>
    //     </Link>
       
    //     <p className="lg:text-lg font-bold text-third">
    //       {carrusel[posicion].categoria}</p>
    //     <p className="lg:text-xl lg:mt-8 text-justify">
    //       {carrusel[posicion].descripcion}</p>
    //   </div>
      
      
    // </div>
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