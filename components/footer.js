import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div id="Footer" className="flex items-center h-footer justify-center">
        <Image
          src="/LOGO MOSAICO MOD COLOR.png"
          width={195}
          height={67}
        />
      </div>
      <div className="container h-3 bg-primary"></div>
    </footer>
  );
}
