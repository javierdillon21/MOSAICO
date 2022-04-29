import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function AboutUs() {
  const carrusel = [
    "h_equipo.jpg",
    "i_javier.jpg",
    "i_luis.jpg",
    "p_alta.jpg",
    "p_espalda.jpg",
    "p_espaldas.jpg",
    "v_equipo.jpg",
  ];
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col gap-y-8 md:gap-y-14 w-11/12 items-center bg-white">
        <section className="grid grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-y-4 pl-2 pt-8 md:p-8 md:pb-0 items-center justify-around w-full lg:w-3/2 lg:gap-x-4 bg-third">
          <span className="flex flex-col col-span-2 md:col-span-1 px-0.5 gap-y-4 sm:items-center md:text-center">
            <p className="font-bold text-3xl lg:text-4xl leading-none text-gray-100">
              Sobre nosotros
            </p>
            <p className="font-normal text-sm sm:text-lg lg:text-2xl text-gray-200 ">
              Somos una empresa dedicada al desarrollo de proyectos
              arquitectónicos y asesoramiento profesional personalizado. Estamos
              especializados principalmente en {""}
              <a className="font-semibold text-gray-50">
                Representación Visual
              </a>
              , usando los renders como una herramienta precisa de
              materialización y comunicación del proyecto a los clientes.
            </p>
          </span>

          <span className="flex flex-col gap-y-4 pb-8 md:text-center ">
            <p className="font-bold text-3xl lg:text-4xl leading-none text-gray-100">
              ¿Por qué Mosaico?
            </p>
            <p className="font-normal text-sm sm:text-lg lg:text-2xl text-gray-200 ">
              El mosaico es una obra que comprende el uso de una amalgama de
              materiales para formar composiciones geométricas, figurativas y
              artísticas; por esta razón, consideramos que Mosaico es una
              analogía directa de la Arquitectura y representa la vastedad de la
              misma.
            </p>
          </span>
          <span className="flex w-full h-full sm:row-span-2 ">
            <Image
              objectFit="contain"
              src="/perfil.png"
              width={4000}
              height={1500}
            />
          </span>
        </section>
        <section className="flex flex-col px-2 gap-y-3 justify-center w-full md:h-56 lg:w-10/12 text-left lg:text-center">
          <p className="font-bold text-3xl lg:text-4xl leading-none">
            Nuestra experiencia
          </p>
          <p className="font-normal text-sm sm:text-lg lg:text-2xl text-third ">
            Llevamos 5 años en el mercado de la construcción prestando nuestros
            servicios a inmobiliarias, constructoras y arquitectos
            independientes diseñando soluciones que enriquezcan y agreguen valor
            comercial a las propuestas. A lo largo de nuestra trayectoria hemos
            colaborado en proyectos residenciales, comerciales e
            institucionales.
          </p>
        </section>

        <div
          id="fotos"
          className="grid grid-cols-2 w-full gap-0.5 md:h-screen md:grid-cols-3 "
        >
          <Image
            objectFit="cover"
            className="row-span-2"
            src="/sobre_nosotros/i_luis.jpg"
            width={4000}
            height={3000}
          />
          <Image
            objectFit="cover"
            src="/sobre_nosotros/h_equipo.jpg"
            width={2000}
            height={1000}
          />
          <Image
            objectFit="cover"
            src="/sobre_nosotros/v_mosaico.jpg"
            width={2000}
            height={3000}
          />
          <Image
            objectFit="cover"
            src="/sobre_nosotros/i_javier.jpg"
            width={2000}
            height={1000}
          />
          <Image
            objectFit="cover"
            src="/sobre_nosotros/v_equipo.jpg"
            width={4000}
            height={3000}
          />
          <Image
            objectFit="cover"
            src="/sobre_nosotros/p_alta.jpg"
            width={2000}
            height={3000}
          />
        </div>
        <section className="flex flex-col px-2 gap-y-8 justify-center w-full lg:w-4/5 text-left md:h-52">
          <p className="font-bold text-3xl lg:text-4xl leading-none ">
            Nuestros clientes
          </p>
          <div className="flex w-full h-20 lg:h-60 gap-x-5 lg:gap-x-14 overflow-x-auto ">
            <span className="flex flex-shrink-0 h-full w-28 md:w-96">
              <Image
                src="/logos_clientes/dillonconstrucciones/negro.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
            <span className="flex flex-shrink-0 h-full w-28 md:w-96">
              <Image
                src="/logos_clientes/inmobiliariafuentes.png"
                width={300}
                height={300}
                className="object-scale-down object-center"
              />
            </span>
            <span className="flex flex-shrink-0 h-full w-28 md:w-96">
              <Image
                src="/logos_clientes/isaac.png"
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
    </div>
  );
}
