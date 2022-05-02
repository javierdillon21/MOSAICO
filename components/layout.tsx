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
      className={`relative flex flex-col w-screen ${
        isHomePage ? "h-screen" : "min-h-screen"
      } font-raleway`}
    >
      <Header />
      <main className={`flex w-full flex-1  ${isHomePage ? "" : "md:py-8"}`}>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  );
}
