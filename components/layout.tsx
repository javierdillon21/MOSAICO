import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout(props: { children: React.ReactElement }) {
  // return (
  //   <div className="flex flex-col h-full">
  //     <div className="bg-red-500 flex-1 ">hola</div>
  //     <div className="bg-yellow-300 flex-1">chao</div>
  //   </div>
  // );

  return (
    <div className="flex flex-col w-screen">
      <Header />
      <main className="flex-1">{props.children}</main>
    </div>
  );
}
