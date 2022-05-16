import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import cliente from "../src/prismic/prismic-configuration";
import {
  Encabezado,
  Imagen,
  PlantillaMultimedia,
  Proyecto,
  ResultsPrismic,
  Texto,
  PropiedadesPlantillas,
} from "../src/data";

export default function GetProyecto() {
  const proId = useRouter().query.id;
  const [proyecto, setProyecto] = useState<Proyecto>();

  function FormatearTexto(arr: Array<Texto>) {
    const strArr = arr.map((obj) => obj.text);
    return strArr.join("\n");
  }

  useEffect(() => {
    console.log("my ID:", String(proId));
    if (proId)
      cliente()
        .query(Prismic.Predicates.at("document.id", String(proId)))
        .then(function (response: { results: ResultsPrismic }) {
          // response is the response object, response.results holds the documents
          const doc = response.results[0];
          console.log("RESPONSE:", response);

          const arrSlices = doc.data.body.map((slice) => {
            if (slice.slice_type === "encabezado") {
              const portada: Imagen = {
                idProyecto: doc.id,
                dimensions: {
                  width: slice.primary.portada.dimensions.width,
                  height: slice.primary.portada.dimensions.height,
                },
                url: slice.primary.portada.url,
              };
              const encabezado: Encabezado = {
                nombre: slice.primary.nombre[0].text,
                categoria: slice.primary.categoria,
                ano: slice.primary.ano,
                cliente: slice.primary.cliente[0].text,
                ubicacion: slice.primary.ubicacion[0].text,
                descripcion: FormatearTexto(slice.primary.descripcion),
                portada: portada,
              };
              return encabezado;
            } else if (slice.slice_type === "multimedia") {
              const arr_imagenes: Imagen[] = slice.items.map((img_obj) => {
                const img: Imagen = {
                  dimensions: {
                    width: img_obj.imagen.dimensions.width,
                    height: img_obj.imagen.dimensions.height,
                  },
                  url: img_obj.imagen.url,
                };
                return img;
              });
              const multimedia: PlantillaMultimedia = {
                resena: FormatearTexto(slice.primary.resena),
                imagenes: arr_imagenes,
                tipo: arr_imagenes.length,
              };
              return multimedia;
            }
          });
          const p: Proyecto = {
            encabezado: arrSlices[0] as Encabezado,
            multimedia: arrSlices.slice(1) as PlantillaMultimedia[],
          };
          setProyecto(p);
        });
  }, [proId]);

  if (!proyecto) return <p> </p>; // elemento de carga.

  return (
    <div className="flex flex-col w-screen font-title">
      <div
        id="Encabezado"
        className="flex flex-col lg:my-8 mx-4 lg:ml-48 mb-4 gap-7 font-title leading-5"
      >
        <div id="Title" className="font-bold">
          <h1 className="text-center lg:text-left text-5xl md:text-6xl">
            {proyecto?.encabezado?.nombre}
          </h1>
        </div>
        <div>
          <div
            id="Details"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:w-2/3 lg:gap-x-9"
          >
            <div>
              <h4 className="font-bold text-base">Año</h4>
              <p className="text-third ">{proyecto?.encabezado.ano}</p>
            </div>
            <div>
              <h4 className="font-bold text-base">Ubicación</h4>
              <p className="text-third ">{proyecto?.encabezado.ubicacion}</p>
            </div>
            <div>
              <h4 className="font-bold text-base ">Cliente</h4>
              <p className="text-third">{proyecto?.encabezado.cliente}</p>
            </div>
            <div>
              <h4 className="font-bold text-base">Categoría</h4>
              <p className="text-third">{proyecto?.encabezado.categoria}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="Portada" className="flex justify-center">
        <Image
          src={proyecto.encabezado.portada.url.replace(
            "?auto=compress,format",
            ""
          )}
          width={proyecto.encabezado.portada.dimensions.width}
          height={proyecto.encabezado.portada.dimensions.height}
          quality={100}
        />
      </div>
      {/* <img
        src={proyecto.encabezado.portada.url.replace("?auto=compress,format",'')}
        // width={proyecto.encabezado.portada.dimensions.width}
        // height={proyecto.encabezado.portada.dimensions.height}
      ></img> */}
      <div
        id="Descripcion"
        className="flex flex-col w-auto my-8 justify-center items-center"
      >
        <h1 className="w-90p md:w-4/5 lg:w-7/12 justify-start text-xl sm:text-2xl font-bold pb-4">
          Sobre el proyecto
        </h1>
        <p className="w-90p md:w-4/5 lg:w-7/12 text-justify text-third">
          {proyecto.encabezado.descripcion}
        </p>
      </div>

      <div
        id="Cuerpo"
        className="flex flex-col w-auto items-center gap-4 md:gap-8 mb-16 text-third font-title"
      >
        {proyecto.multimedia.map((plantilla, index) => {
          let PlantillaAUsar =
            plantillasTipos[
              `${plantilla.tipo}${
                plantilla.resena ? "R" : ""
              }` as PropiedadesPlantillas
            ];
          if (PlantillaAUsar)
            return (
              <PlantillaAUsar
                key={`plantillasMultimedia-${plantilla.tipo}-${index}`}
                plantilla={plantilla}
              />
            );
        })}
      </div>
    </div>
  );
}

var plantillasTipos = {
  "1": Plantilla1,
  "1R": Plantilla1R,
  "2": Plantilla2,
  "2R": Plantilla2R,
  "3": Plantilla3,
  "3R": Plantilla3R,
  "4": Plantilla4,
  "4R": Plantilla4R,
};

function Plantilla1(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 1) throw "numero de imágenes no esperadas";
    const img = props.plantilla.imagenes[0];
    return (
      <div className="grid w-90p lg:w-4/5 lg:h-pl1 self-center">
        <Image
          className="object-cover object-center"
          src={img.url}
          width={img.dimensions.width}
          height={img.dimensions.height}
          quality={100}
        />
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla1R(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 1 || !props.plantilla.resena)
      throw "numero de imágenes no esperadas || reseña vacía";
    const img = props.plantilla.imagenes[0];
    return (
      <div className="grid grid-cols-1 w-90p md:grid-cols-2 lg:w-4/5 gap-4 md:gap-8 ">
        <Image
          className="object-cover object-center"
          src={img.url}
          width={img.dimensions.width}
          height={img.dimensions.height}
          quality={100}
        />

        <p className="text-justify self-center">{props.plantilla.resena}</p>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla2(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 2) throw "numero de imágenes no esperadas";
    return (
      <div className="grid grid-cols-1 w-90p md:grid-cols-2 lg:w-4/5 gap-4 md:gap-8">
        {props.plantilla.imagenes.map((img) => {
          return (
            <div className="flex h-80 md:h-auto">
              <Image
                className="object-cover"
                src={img.url}
                width={img.dimensions.width}
                height={img.dimensions.height}
                quality={100}
              />
            </div>
          );
        })}
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla2R(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 2 || !props.plantilla.resena)
      throw "numero de imágenes no esperadas || reseña vacía";
    return (
      <div className="grid grid-cols-1 w-90p md:grid-cols-2 lg:w-4/5 gap-4 md:gap-8">
        {props.plantilla.imagenes.map((img) => {
          return (
            <div className="flex h-44 md:h-auto">
              <Image
                className="object-cover"
                src={img.url}
                width={img.dimensions.width}
                height={img.dimensions.height}
                quality={100}
              />
            </div>
          );
        })}
        <p className="md:col-span-2 lg:w-5/6 justify-self-center text-justify">
          {props.plantilla.resena}
        </p>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla3(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 3) throw "numero de imágenes no esperadas";
    return (
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-4 md:grid-flow-col w-90p lg:w-4/5 md:gap-8 gap-4">
        {props.plantilla.imagenes.slice(0, 2).map((img) => {
          return (
            <div className="flex md:col-span-2 md:row-span-2">
              <Image
                className="object-cover object-center"
                src={img.url}
                width={img.dimensions.width}
                height={img.dimensions.height}
                quality={100}
              />
            </div>
          );
        })}
        <div className="flex col-span-2 md:col-span-3 md:row-span-4">
          <Image
            className="object-cover"
            src={props.plantilla.imagenes[2].url}
            width={props.plantilla.imagenes[2].dimensions.width}
            height={props.plantilla.imagenes[2].dimensions.height}
          />
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla3R(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 3 || !props.plantilla.resena)
      throw "numero de imágenes no esperadas || reseña vacía";
    return (
      <div className="flex flex-col w-full gap-8 items-center">
        <div className="w-90p md:order-first md:col-span-3 lg:w-4/6 ">
          <p className="justify-self-center self-end text-justify">
            {props.plantilla.resena}
          </p>
        </div>
        <div className="grid grid-rows-3 w-90p md:grid-cols-3 md:grid-rows-2 md:grid-flow-col lg:w-4/5 gap-4 md:gap-8">
          {props.plantilla.imagenes.slice(0, 2).map((img) => {
            return (
              <div className="flex">
                <Image
                  className="object-cover object-center"
                  src={img.url}
                  width={img.dimensions.width}
                  height={img.dimensions.height}
                  quality={100}
                />
              </div>
            );
          })}

          <div className="flex md:col-span-2 md:row-span-2">
            <Image
              className="object-cover"
              src={props.plantilla.imagenes[2].url}
              width={props.plantilla.imagenes[2].dimensions.width}
              height={props.plantilla.imagenes[2].dimensions.height}
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}
function Plantilla4(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 4)
      throw "numero de imágenes no esperadas || reseña vacía";
    return (
      <div className="grid grid-cols-2 w-90p gap-4 md:grid-cols-4 lg:w-4/5 md:gap-8">
        {props.plantilla.imagenes.map((img) => {
          return (
            <div className="flex h-44 md:h-96 lg:h-pl1R">
              <Image
                className="object-cover object-center"
                src={img.url}
                width={img.dimensions.width}
                height={img.dimensions.height}
                quality={100}
              />
            </div>
          );
        })}
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}

function Plantilla4R(props: { plantilla: PlantillaMultimedia }) {
  try {
    if (props.plantilla.tipo !== 4 || !props.plantilla.resena)
      throw "numero de imágenes no esperadas || reseña vacía";
    return (
      <div className="grid grid-cols-2 w-90p gap-4 md:grid-cols-4 lg:w-4/5 md:gap-8">
        {props.plantilla.imagenes.map((img) => {
          return (
            <div className="flex h-44 md:h-96 lg:h-pl1R">
              <Image
                className="object-cover object-center"
                src={img.url}
                width={img.dimensions.width}
                height={img.dimensions.height}
                quality={100}
              />
            </div>
          );
        })}
        <p className="col-span-2 md:col-span-4 lg:w-5/6 justify-self-center text-justify">
          {props.plantilla.resena}
        </p>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
  return <></>;
}
