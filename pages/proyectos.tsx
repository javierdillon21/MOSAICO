import Image from "next/image";
import Prismic from '@prismicio/client'
import cliente from '../src/prismic/prismic-configuration'
import { ResultsPrismic, Imagen, Miniatura } from "../src/data";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function MostrarProyectos() {

    const [miniaturas, setMiniaturas] = useState<Miniatura[]>()
    useEffect(() => {
        cliente().query(
            Prismic.Predicates.at('document.type', 'proyecto')
        ).then(function (response: { results: ResultsPrismic }) {
            let arr: Miniatura[] = response.results.map((document) => {
                var imgPortada: Imagen = {
                    idProyecto: document.id,
                    dimensions: {
                        width: document.data.body[0].primary.portada.dimensions.width,
                        height: document.data.body[0].primary.portada.dimensions.height
                    },
                    url: document.data.body[0].primary.portada.url
                }
                var miniatura: Miniatura = {
                    nombre: document.data.body[0].primary.nombre[0].text,
                    portada: imgPortada,
                    categoria: document.data.body[0].primary.categoria,
                    ubicacion: document.data.body[0].primary.ubicacion[0].text
                }
                return miniatura

            })
            setMiniaturas(arr)
        })

    }, [])

    return (
        <div className="flex h-auto w-auto justify-center">
            <div className="flex justify-center items-center w-9/10 h-auto flex-wrap space-x-4 space-y-8">
                {miniaturas?.map((p) => {
                    return (
                        <div>
                            <div className="flex flex-col w-1/5 h-miniatura self-center">
                                <Link href={`/${p.portada.idProyecto}`}>
                                    <a>
                                        <Image className="object-scale-down object-center"
                                            src={p.portada.url}
                                            width={p.portada.dimensions.width}
                                            height={p.portada.dimensions.height}
                                        />
                                    </a>
                                </Link>
                                <div>
                                <p>{p.nombre}</p>
                                <p>{p.categoria}</p>
                                <p>{p.ubicacion}</p>
                            </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>

    )

}