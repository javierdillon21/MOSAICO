import Header from "./header";
import Footer from "./footer";
import React from "react";


export default function Layout(props:{children: React.ReactElement}) {
  return (
    <div className="flex flex-col h-auto w-auto">
      <Header />
      
      <main>
        {props.children}
      </main>
      
      
    </div>
  );
}
