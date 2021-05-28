import Header from "./header";
import Footer from "./footer";
import React from "react";


export default function Layout(props:{children: React.ReactElement}) {
  return (
    <div className="flex flex-col h-screen w-screen">
      
      <main>
        {props.children}
      </main>
      <Header />
      
    </div>
  );
}
