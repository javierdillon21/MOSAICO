import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white "  >
      <div id="NavegationBar" className=" flex flex-row pl-16 pr-16 h-navegationbar content-center items-center justify-between">

        <div id="SocialWebIcons" className="flex flex-row w-socialmediabox justify-between">
          <Link href="/">
            <Image
              src="/fb-logo.png"
              width={26}
              height={26}
            />
          </Link>
          <Link href="/">
            <Image
              src="/insta-logo.png"
              width={26}
              height={26}

            />
          </Link>



        </div>

        <div id="Tabs" className="flex flex-row w-tabsbox justify-around font-sans text-header text-primary">
          <Link href="/">
            <a className="transition-all duration-75 ease-in-out hover:font-extrabold hover:text-secondary px-3">
              INICIO
                </a>
          </Link>
          <Link href="/">
            <a className="transition-all duration-75 ease-in-out hover:font-extrabold hover:text-secondary px-3">
              GALERÍA
                </a>
          </Link>
          <Link href="/">
            <a className="transition-all duration-75 ease-in-out hover:font-extrabold hover:text-secondary px-3">
              SOBRE NOSOTROS
                </a>
          </Link>
          <Link href="/">
            <a className="transition-all duration-75 ease-in-out hover:font-extrabold hover:text-secondary px-3">
              CONTACTO
                </a>
          </Link>
        </div>

        <div id="CbServicios" className="flex flex-row w-cbservicios items-center justify-between font-sans text-header text-primary hover:text-secondary">
          <Link href="/">
            <a >
              NUESTROS SERVICIOS
              </a>
          </Link>
          <svg
            className="transition hover:fill-current text-secondary hover:stroke-current stroke-1"
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 0 24 24"
            width="26">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
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
      </div>
    </header >
  );
}



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