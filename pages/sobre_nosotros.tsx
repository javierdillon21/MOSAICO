import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Carrusel from "../components/carrusel";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-y-6 w-11/12 bg-white">
        <section className="flex flex-row px-2 items-center w-full sm:items-start">
          <span className="flex flex-col w-3/5 gap-y-4">
            <p className="font-bold text-3xl leading-none">Sobre nosotros</p>
            <p className="font-normal text-sm sm:text-lg ">
              Somos una empresa dedicada al desarrollo de proyectos
              arquitectónicos y asesoramiento profesional personalizado,
              especializados principalmente en{" "}
              <a className="font-semibold text-third">Representación Visual</a>.
            </p>
          </span>
          <span className="flex w-44 sm:w-60 sm:h-60 bg-gray-100 overflow-hidden shadow-lg ">
            {/* <Image
              src="/perfil.png"
              width={1512}
              height={2715}
              className="object-cover object-top"
            /> */}
          </span>
        </section>
        <section className="flex flex-col px-2 gap-y-3 justify-center w-full text-center">
          <p className="font-bold text-3xl">Nuestra experiencia</p>
          <p className="font-normal text-sm">
            Somos una empresa dedicada al desarrollo de proyectos
            arquitectónicos y asesoramiento profesional personalizado.
            Especializados principalmente en Representación Visual. Somos una
            empresa dedicada al desarrollo de proyectos arquitectónicos y
            asesoramiento profesional personalizado. Especializados
            principalmente en Representación Visual.
          </p>
        </section>
        {/* <Carrusel></Carrusel> */}
        <section className="flex flex-col px-2 gap-y-3 justify-center w-full text-center">
          11515151515
        </section>
      </div>
    </>
  );
}
