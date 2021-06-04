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
          };
          return miniatura;
        });
        setMiniaturas(arr);
      });
  }, []);

  return (
    <div className="flex w-screen justify-center mt-24 mb-8 md:mt-4 xl:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-x-2 gap-y-6">
        {miniaturas?.map((p) => {
          return (
            <div>
              <div className="grid font-title text-sm text-third">
                <Link href={`/${p.portada.idProyecto}`}>
                  <a>
                    <Image
                      className="object-scale-down object-center transition duration-500 ease-in-out transform hover:scale-110"
                      src={p.portada.url}
                      width={p.portada.dimensions.width}
                      height={p.portada.dimensions.height}
                    />
                  </a>
                </Link>
                <div>
                  <p className="text-secondary text-lg transition duration-500 ease-in-out transform hover:translate-x-3.5 hover:scale-110">
                    {p.nombre}
                  </p>
                  <p>{p.categoria}</p>
                  <p>{p.ubicacion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
