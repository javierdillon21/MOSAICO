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
              src="/modelado3d.jpg"
              objectFit="cover"
              width={2000}
              height={1000}
            />
          </span>
          <span className="flex flex-col w-full px-4 gap-y-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">Modelado 3D</p>
            <p className="text-sm text-third md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled t sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
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
          <span className="flex flex-col w-full px-4 gap-y-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">
              Renderizado Fotorealista
            </p>
            <p className="text-sm text-third md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambntly with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. 500s, when an unknown
              printer took a galley of type and scrambntly with deskto
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
          <span className="flex flex-col w-full px-4 gap-y-4 overflow-auto">
            <p className="font-bold text-xl md:text-3xl">
              Renderizado Fotorealista
            </p>
            <p className="text-sm text-third md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambledof Lorem Ipsum. 500s, when an unknown printer
              took a galley of type and scrambntly with deskto 500s, when an
              unknown printer took a galley of type and scrambntly with deskto
            </p>
          </span>
        </div>
      </section>
    </div>
  );
}
