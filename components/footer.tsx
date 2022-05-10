import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="Footer"
      className="flex flex-row items-center h-footer md:h-60 bg-third p-4 gap-y-2 justify-around md:justify-between md:px-10"
    >
      <span className="flex flex-row items-center gap-8">
        <span className="hidden md:flex h-36 w-36">
          <Image
            src="/logos_mosaico/blanco.png"
            objectFit="cover"
            height={500}
            width={500}
          />
        </span>
        <span className="hidden md:flex border-l border-gray-100 h-32"></span>
        <span className="text-gray-100 text-xs md:text-lg">
          <p className="text-gray-100 font-bold">CONTACTO</p>
          <p>Guayaquil, Ecuador.</p>
          <p>Telf.: (+593) 0996192074</p>
          <p>mosaicogrupoarquitectonico@gmail.com</p>
        </span>
      </span>

      {/* <span className="flex h-44 w-44">
        <Image
          src="/logos_mosaico/blanco.png"
          objectFit="cover"
          height={500}
          width={500}
        />
      </span> */}
      <span className="flex justify-center items-center gap-6 md:text-2xl md:gap-14">
        <Link href="https://www.facebook.com/MOSAICO-Arquitectura-y-Dise%C3%B1o-104336595514024/?ref=pages_you_manage">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            stroke="1"
            size="lg"
            color="white"
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            stroke="1"
            size="lg"
            color="white"
          />
        </Link>
        <Link href="https://wa.me/message/3TQTZWZSJDTUL1">
          <FontAwesomeIcon
            icon={["fab", "whatsapp"]}
            stroke="1"
            size="lg"
            color="white"
          />
        </Link>
      </span>

      {/* <span className="text-gray-100 text-xs">
        ©Todos lo derechos reservados.{" "}
        <a className="text-secondary">Mosaico Grupo Arquitectónico</a>
      </span> */}
    </div>
  );
}
