import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white"  >
      <div id="NavegationBar" className="flex px-16 h-navegationbar w-auto content-center justify-between items-center text-xl text-third font-title">

        <div className="flex w-52 items-center">
          <Image className="object-scale-down"
            src="/LOGO MOSAICO HORIZONTAL.png"
            width={5231}
            height={1512}
          />
        </div>


        <div id="PrimaryTabs" className="container w-auto  justify-around space-x-12">
          <Link href="/">
            <a className="transition all duration-500 ease-in-out hover:text-secondary px-3">
              Inicio
                </a>
          </Link>
          <Link href="/proyectos">
            <a className="transition-all duration-500 ease-in-out hover:text-secondary px-3">
              Proyectos
                </a>
          </Link>
          <Link href="/">
            <a className="transition-all duration-500 ease-in-out hover:text-secondary px-3">
              Sobre Nosotros
                </a>
          </Link>
          <Link href="/">
            <a className="transition-all duration-500 ease-in-out hover:text-secondary px-3">
              Contacto
                </a>
          </Link>
        </div>

        <div id="SecondaryTabs" className="container w-auto justify-around">
          <Link href="/">
            <a className="transition-all duration-500 ease-in-out hover:text-secondary px-3">
              Nuestros Servicios
              </a>
          </Link>
        </div>


      </div>
    </header >
  );
}

{/* <svg
            className="transition hover:fill-current text-secondary hover:stroke-current stroke-1"
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 0 24 24"
            width="26">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg> */}
{/* <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded "
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
                        
         </button> */}

// {/* <div className="flex flex-wrap items-center justify-center lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
//         <div className="flex flex-row">
//           {/* <Image
//             src="/tailwind-logo.svg"
//             width={40}
//             height={40}
//             priority
//             alt="Tailwind CSS logo"
//           /> */}

//           <Link href="/">
//             <a className="text-lg md:text-xl font-bold ml-3 text-black">
//               INICIO
//             </a>
//           </Link>
//           <Link href="/">
//             <a className="text-lg md:text-xl font-bold ml-3 text-black">
//               GALERÍA
//             </a>
//           </Link>
//           <Link href="/">
//             <a className="text-lg md:text-xl font-bold ml-3 text-black">
//               SOBRE NOSOTROS
//             </a>
//           </Link>
//           <Link href="/">
//             <a className="text-lg md:text-xl font-bold ml-3 text-black">
//               CONTACTO
//             </a>
//           </Link>
//         </div>



//         <ul
//           className={cn(
//             "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
//             mobileMenuIsOpen ? `block` : `hidden`
//           )}
//         >
//           {[
//             { title: "Home", route: "/" },
//             { title: "About", route: "/about" },
//           ].map(({ route, title }) => (
//             <li className="mt-3 md:mt-0 md:ml-6" key={title}>
//               <Link href={route}>
//                 <a className="block text-white">{title}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div> */}