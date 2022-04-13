import Header from "./header";
import Footer from "./footer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Layout(props: { children: React.ReactElement }) {
  const [isHomePage, setIsHomePage] = useState(true);
  const router = useRouter().asPath;
  useEffect(() => {
    if (router !== "/") {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, [router]);
  return (
    <div
      className={`flex flex-col max-w-screen ${
        isHomePage ? "h-screen" : "min-h-screen"
      } bg-gray-400`}
    >
      <Header />
      <main className="flex-1">{props.children}</main>
    </div>
  );
}
