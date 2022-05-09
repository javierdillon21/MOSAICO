import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col h-full w-full justify-start items-center gap-y-10">
      <section className="flex flex-col w-4/5 md:h-40 items-start md:items-center justify-start md:justify-center md:bg-third">
        <p className="font-bold text-3xl lg:text-4xl leading-none md:text-gray-100">
          Nuestros Servicios
        </p>
        <p className="font-normal text-sm sm:text-lg lg:text-2xl md:text-gray-200">
          Dale valor a tus proyectos con nosotros!
        </p>
      </section>

      <section
        id="cartillas"
        className="flex flex-col md:flex-row w-11/12 md:w-2/3 h-auto gap-8 items-center justify-start"
      >
        <div
          id="modelado 3D"
          className="flex flex-col w-full h-96 md:h-portada rounded-sm border border-gray-200 gap-6"
        >
          <span className="flex w-full h-1/2">
            <Image
              src="/modelado1.png"
              objectFit="cover"
              width={2000}
              height={1000}
            />
          </span>
          <span className="flex flex-col w-full px-4 gap-y-4 pb-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">
              Modelado 3D
              <p className="font-light text-sm md:text-lg text-third">
                Del 2D al 3D. Materializa y da volumen a tus obras.
              </p>
            </p>

            <p className="text-sm text-gray-700 md:text-xl">
              Maquetado digital de todo tipo de escenario arquitectónico:
              residenciales, comerciales, institucionales, interiores y
              exteriores, prototipado de viviendas para promoción inmobiliaria,
              y mobiliarios a medida; proyectos académicos y/o profesionales.
            </p>
          </span>
        </div>
        <div
          id="renderizado"
          className="flex flex-col w-full h-96 md:h-portada rounded-sm border border-gray-200 gap-6"
        >
          <span className="flex w-full h-1/2">
            <Image
              src="/renderizado.jpg"
              objectFit="cover"
              width={2000}
              height={1000}
            />
          </span>
          <span className="flex flex-col w-full px-4 gap-y-4 pb-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">
              Renderizado Fotorealista
              <p className="font-light text-sm md:text-lg text-third">
                Concreta detalles, acabados y texturas que incrementen el valor
                de tus proyectos.{" "}
              </p>
            </p>
            <p className="text-sm text-gray-700 md:text-xl">
              Representación de espacios, ambientes y proyectos de alta calidad
              de detalle y realismo. Servicio para estudiantes de arquitectura,
              profesionales independientes y constructoras.
            </p>
          </span>
        </div>
        <div
          id="renderizado"
          className="flex flex-col w-full h-96 md:h-portada rounded-sm border border-gray-200 gap-6"
        >
          <span className="flex w-full h-1/2">
            <Image
              src="/construccion.jpg"
              objectFit="cover"
              objectPosition={"top"}
              width={2000}
              height={1000}
            />
          </span>
          <span className="flex flex-col w-full px-4 gap-y-4 pb-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">
              Diseño y Construcción
              <p className="font-light text-sm md:text-lg text-third">
                Construye sobre buenas bases y al mejor costo del mercado.
              </p>
            </p>
            <p className="text-sm text-gray-700 md:text-xl">
              Asesoramiento profesional sobre planificación, presupuesto,
              dirección de obra, construcción, ampliación y remodelación de
              proyectos en Guayaquil, Ecuador.
            </p>
          </span>
        </div>
      </section>
    </div>
  );
}
