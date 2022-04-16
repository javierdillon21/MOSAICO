import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-y-8 w-11/12 items-center bg-white font-title">
        <section className="flex flex-row px-2 items-center justify-center w-full md:h-96 lg:w-3/2 lg:gap-x-4 bg-gray-50">
          <span className="flex flex-col w-3/5 gap-y-4 ">
            <p className="font-bold text-3xl lg:text-4xl leading-none">
              Sobre nosotros
            </p>
            <p className="font-normal text-sm sm:text-lg lg:text-2xl text-third ">
              Somos una empresa dedicada al desarrollo de proyectos
              arquitectónicos y asesoramiento profesional personalizado,
              especializados principalmente en{" "}
              <a className="font-semibold text-third">Representación Visual</a>.
            </p>
          </span>
          <span className="flex w-44 sm:w-60 md:h-full overflow-hidden ">
            <Image
              src="/perfil.png"
              width={600}
              height={1000}
              className="object-cover object-top"
            />
          </span>
        </section>
        <section className="flex flex-col px-2 gap-y-3 justify-center w-full md:h-56 lg:w-10/12 text-left lg:text-center">
          <p className="font-bold text-3xl lg:text-4xl leading-none">
            Nuestra experiencia
          </p>
          <p className="font-normal text-sm sm:text-lg lg:text-2xl text-third ">
            Somos una empresa dedicada al desarrollo de proyectos
            arquitectónicos y asesoramiento profesional personalizado.
            Especializados principalmente en Representación Visual. Somos una
            empresa dedicada al desarrollo de proyectos arquitectónicos y
            asesoramiento profesional personalizado. Especializados
            principalmente en Representación Visual.
          </p>
        </section>

        <section className="flex flex-col px-2 gap-y-3 justify-center w-full lg:w-4/5 text-left md:h-52">
          <p className="font-bold text-3xl lg:text-4xl leading-none ">
            Nuestros clientes
          </p>
          <div className="flex w-full h-20 lg:h-60 gap-x-5 lg:gap-x-14 overflow-x-auto ">
            <span className="flex flex-shrink-0 h-full w-28 lg:w-36">
              <Image
                src="/DILLON CONST/L5.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
            <span className="flex flex-shrink-0 h-full w-28 lg:w-36">
              <Image
                src="/LOGO INMOBILIARIA FUENTES PNG.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
            <span className="flex flex-shrink-0 h-full w-28 lg:w-36">
              <Image
                src="/LOGO ISAAC.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
            <span className="flex flex-shrink-0 h-full w-28 lg:w-36">
              <Image
                src="/DILLON CONST/L5.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
