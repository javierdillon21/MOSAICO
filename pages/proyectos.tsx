import Image from "next/image";
import Prismic from "@prismicio/client";
import cliente from "../src/prismic/prismic-configuration";
import { ResultsPrismic, Imagen, Miniatura } from "../src/data";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MostrarProyectos() {
  const [miniaturas, setMiniaturas] = useState<Miniatura[]>();
  useEffect(() => {
    cliente()
      .query(Prismic.Predicates.at("document.type", "proyecto"))
      .then(function (response: { results: ResultsPrismic }) {
        let arr: Miniatura[] = response.results.map((document) => {
          var imgPortada: Imagen = {
            idProyecto: document.id,
            dimensions: {
              width: document.data.body[0].primary.portada.dimensions.width,
              height: document.data.body[0].primary.portada.dimensions.height,
            },
            url: document.data.body[0].primary.portada.url,
          };
          var miniatura: Miniatura = {
            nombre: document.data.body[0].primary.nombre[0].text,
            portada: imgPortada,
            categoria: document.data.body[0].primary.categoria,
            ubicacion: document.data.body[0].primary.ubicacion[0].text,
            ambiente: document.data.body[0].primary.ambiente,
          };
          return miniatura;
        });
        console.log(miniaturas);
        setMiniaturas(arr);
      });
  }, []);

  return (
    <div className="flex w-full justify-center mt-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-x-2  sm:gap-y-6">
        {miniaturas?.map((p) => {
          return (
            <div key={`id:${p.nombre}`}>
              <div className="grid text-sm text-third">
                <Link href={`/${p.portada.idProyecto}`}>
                  <Image
                    className="object-scale-down object-center transition duration-500 ease-in-out transform hover:scale-110"
                    src={p.portada.url}
                    width={p.portada.dimensions.width}
                    height={p.portada.dimensions.height}
                  />
                </Link>
                <section>
                  <p className="text-black text-lg font-bold transition duration-500 ease-in-out transform hover:translate-x-3.5 hover:scale-110">
                    {p.nombre}
                  </p>
                  <p>{p.categoria}</p>
                  <p>{p.ambiente}</p>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
