import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { clearTimeout, setTimeout } from "timers";

export default function Test() {
  const arr = ["red", "green", "blue"];
  const [pos, setpos] = useState(0);
  const divref = useRef(null);
  const titleref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleref.current,
      { opacity: 0, ease: "power2.in", x: 100 },
      {
        duration: 1,
        opacity: 1,
        delay: 1,
        x: 0,
      }
    );
  }, [pos]);

  useEffect(() => {
    gsap.to(divref.current, { opacity: 100 });
  }, [pos]);

  useEffect(() => {
    gsap.from(divref.current, { opacity: 0, duration: 12 });
  }, [pos]);

  const time = setTimeout(() => {
    console.log("time");
    setpos(pos + 1);
  }, 2000);
  return (
    <>
      {/* {arr && (
        <div
          ref={divref}
          className={`absolute flex h-36 w-36 border bg-${arr[pos]}-100`}
          onClick={() => setpos(pos + 1 == arr.length ? 0 : pos + 1)}
        ></div>
      )}
      <div ref={titleref} className="absolute bottom-0 text-6xl">
        {arr[pos]}
      </div> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          clearTimeout(time);
        }}
      >
        cancelar
      </button>
    </>
  );
}
