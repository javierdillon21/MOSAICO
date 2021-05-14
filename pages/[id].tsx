import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import Prismic from '@prismicio/client'
import cliente from '../src/prismic/prismic-configuration'
import { Encabezado, Imagen, PlantillaMultimedia, Proyecto, ResultsPrismic, Texto, PropiedadesPlantillas } from "../src/data";


export default function GetProyecto() {
    const proId = useRouter().query.id;
    const [proyecto, setProyecto] = useState<Proyecto>()

    function FormatearTexto(arr: Array<Texto>) {
        const strArr = arr.map((obj) => obj.text)
        return strArr.join('\n')
    }

    useEffect(() => {
        console.log('my ID:', String(proId))
        if (proId)
            cliente().query(
                Prismic.Predicates.at('document.id', String(proId))
            ).then(function (response: { results: ResultsPrismic }) {
                // response is the response object, response.results holds the documents
                const doc = response.results[0];
                console.log('RESPONSE:', response);

                const arrSlices = doc.data.body.map((slice) => {
                    if (slice.slice_type === 'encabezado') {
                        const portada: Imagen = {
                            idProyecto: doc.id,
                            dimensions: {
                                width: slice.primary.portada.dimensions.width,
                                height: slice.primary.portada.dimensions.height
                            },
                            url: slice.primary.portada.url
                        };
                        const encabezado: Encabezado = {
                            nombre: slice.primary.nombre[0].text,
                            categoria: slice.primary.categoria,
                            ano: slice.primary.ano,
                            cliente: slice.primary.cliente[0].text,
                            ubicacion: slice.primary.ubicacion[0].text,
                            descripcion: FormatearTexto(slice.primary.descripcion),
                            portada: portada,
                            carrusel: slice.primary.carrusel
                        };
                        return encabezado;
                    } else if (slice.slice_type === 'multimedia') {
                        const arr_imagenes: Imagen[] = slice.items.map((img_obj) => {
                            const img: Imagen = {
                                dimensions: {
                                    width: img_obj.imagen.dimensions.width,
                                    height: img_obj.imagen.dimensions.height
                                },
                                url: img_obj.imagen.url
                            };
                            return img;
                        });
                        const multimedia: PlantillaMultimedia = {
                            resena: FormatearTexto(slice.primary.resena),
                            imagenes: arr_imagenes,
                            tipo: arr_imagenes.length
                        };
                        return multimedia;
                    }

                });
                const p: Proyecto = {
                    encabezado: arrSlices[0] as Encabezado,
                    multimedia: arrSlices.slice(1,) as PlantillaMultimedia[]
                };
                setProyecto(p);


            });
    }, [proId])



    if (!proyecto) return <p> </p>// elemento de carga.

    return (
        <div className="w-auto justify-center">
            <div id="Encabezado" className="flex self-center flex-col pt-8 pb-8 pl-48 space-y-7 font-title">
                <div id="Title" className= "font-bold">
                    <h1 className="text-6xl">{proyecto?.encabezado?.nombre}</h1>
                </div>
                <div >
                    <div id="Details" className="font-title grid grid-cols-4 gap-x-9">
                        <div>
                            <h4 className="font-bold text-base">Año</h4>
                            <p className="text-third ">
                                {proyecto?.encabezado.ano}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-base">Ubicación</h4>
                            <p className="text-third ">
                                {proyecto?.encabezado.ubicacion}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-base ">Cliente</h4>
                            <p className="text-third">
                                {proyecto?.encabezado.cliente}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-base">Categoría</h4>
                            <p className="text-third">
                                {proyecto?.encabezado.categoria}</p>
                        </div>

                    </div>
                </div>


            </div>
            <div id="Portada" className="flex w-auto h-portada">
                <Image className="object-cover object-center"
                    src={proyecto.encabezado.portada.url}
                    width={proyecto.encabezado.portada.dimensions.width}
                    height={proyecto.encabezado.portada.dimensions.height}
                />
            </div>

            <div id="Descripcion" className="flex flex-col w-auto py-16 justify-center">
                <h1 className="w-7/12 self-center justify-start text-xl font-bold pb-4">
                    Sobre el proyecto</h1>
                <p className="w-7/12 self-center text-justify text-third">
                    {proyecto.encabezado.descripcion}</p>
            </div>

            <div id="Cuerpo" className="flex flex-col w-auto justify-center space-y-14">
                {
                    proyecto.multimedia.map((plantilla, index) => {
                        let PlantillaAUsar = plantillasTipos[`${plantilla.tipo}${plantilla.resena ? 'R' : ''}` as PropiedadesPlantillas]
                        if (PlantillaAUsar)
                            return <PlantillaAUsar key={`plantillasMultimedia-${plantilla.tipo}-${index}`} plantilla={plantilla} />

                    })
                }

            </div>



        </div>

    )
}


var plantillasTipos = {
    '1': Plantilla1,
    '1R': Plantilla1R,
    '2': Plantilla2,
    '2R': Plantilla2R,
    '3': Plantilla3,
    '3R': Plantilla3R,
    '4': Plantilla4,
    '4R': Plantilla4R
}

function Plantilla1(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 1) throw 'numero de imágenes no esperadas'
        const img = props.plantilla.imagenes[0]
        return (
            <div className="flex w-4/5 h-pl1 self-center">
                <Image className="object-scale-down object-center"
                    src={img.url}
                    width={img.dimensions.width}
                    height={img.dimensions.height}
                />
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}

function Plantilla1R(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 1 || !props.plantilla.resena) throw 'numero de imágenes no esperadas || reseña vacía'
        const img = props.plantilla.imagenes[0]
        return (
            <div className="flex w-4/5 self-center justify-center items-center space-x-8 ">
                <div className="flex w-2/3">
                    <Image className="object-center"
                        src={img.url}
                        width={img.dimensions.width}
                        height={img.dimensions.height}
                    />
                </div>
                <p className="w-1/3 px-8 text-justify">
                    {props.plantilla.resena}</p>
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}

function Plantilla2(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 2) throw 'numero de imágenes no esperadas'
        return (
            <div className="flex w-4/5 self-center justify-center items-center space-x-8">
                {props.plantilla.imagenes.map((img) => {
                    return (
                        <div className="flex w-1/2 h-pl2 ">
                            <Image className="object-cover"
                                src={img.url}
                                width={img.dimensions.width}
                                height={img.dimensions.height}
                            />
                        </div>
                    )
                })}
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>

}

function Plantilla2R(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 2 || !props.plantilla.resena) throw 'numero de imágenes no esperadas || reseña vacía'
        return (
            <div className="flex w-4/5 flex-col self-center justify-center items-center space-y-2">
                <div className="flex w-auto justify-center items-center space-x-8">
                    <p className="w-1/2 px-8 text-justify">
                        {props.plantilla.resena}</p>

                    <div className="flex w-1/2 justify-center items-center h-pl2R">
                        <Image className="object-scale-down"
                            src={props.plantilla.imagenes[0].url}
                            width={props.plantilla.imagenes[0].dimensions.width}
                            height={props.plantilla.imagenes[0].dimensions.height}
                        />
                    </div>
                </div>

                <div className="flex w-full h-pl1R">
                    <Image className="object-cover object-center"
                        src={props.plantilla.imagenes[1].url}
                        width={props.plantilla.imagenes[1].dimensions.width}
                        height={props.plantilla.imagenes[1].dimensions.height}
                    />
                </div>

            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}

function Plantilla3(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 3) throw 'numero de imágenes no esperadas'
        return (
            <div className="flex w-4/5 self-center justify-center items-center space-x-8">
                <div className="flex w-2/5 flex-col justify-center items-center space-y-8">
                    {props.plantilla.imagenes.slice(0, 2).map((img) => {
                        return (
                            <div className="flex w-auto h-pl3">
                                <Image className="object-cover object-center"
                                    src={img.url}
                                    width={img.dimensions.width}
                                    height={img.dimensions.height}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className="flex w-3/5 h-pl2 ">
                    <Image className="object-cover"
                        src={props.plantilla.imagenes[2].url}
                        width={props.plantilla.imagenes[2].dimensions.width}
                        height={props.plantilla.imagenes[2].dimensions.height}
                    />
                </div>
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>

}

function Plantilla3R(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 3 || !props.plantilla.resena) throw 'numero de imágenes no esperadas || reseña vacía'
        return (
            <div className="flex w-4/5 flex-col self-center justify-center items-center space-x-8 space-y-8">
                <div className="flex w-auto justify-center items-center space-x-8">
                    {props.plantilla.imagenes.slice(0, 2).map((img) => {
                        return (
                            <div className="flex w-auto h-pl3">
                                <Image className="object-cover object-center"
                                    src={img.url}
                                    width={img.dimensions.width}
                                    height={img.dimensions.height}
                                />
                            </div>
                        )
                    })}
                </div>
                <p className="w-4/5 text-justify">
                    {props.plantilla.resena}</p>
                <div className="flex w-full h-pl1R">
                    <Image className="object-cover object-center"
                        src={props.plantilla.imagenes[2].url}
                        width={props.plantilla.imagenes[2].dimensions.width}
                        height={props.plantilla.imagenes[2].dimensions.height}
                    />
                </div>
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}
function Plantilla4(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 4) throw 'numero de imágenes no esperadas || reseña vacía'
        return (
            <div className="flex w-4/5 flex-wrap self-center justify-center items-center space-y-8">
                {props.plantilla.imagenes.map((img) => {
                    return (
                        <div className="flex w-2/5 h-pl1R px-4">
                            <Image className="object-cover object-center"
                                src={img.url}
                                width={img.dimensions.width}
                                height={img.dimensions.height}
                            />
                        </div>
                    )
                })}
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}

function Plantilla4R(props: { plantilla: PlantillaMultimedia }) {
    try {
        if (props.plantilla.tipo !== 4 || !props.plantilla.resena) throw 'numero de imágenes no esperadas || reseña vacía'
        return (
            <div className="flex w-4/5 flex-col self-center justify-center items-center space-x-8 space-y-8 pb-7">
                <div className="flex w-auto justify-center items-center space-x-8">
                    {props.plantilla.imagenes.slice(0, 2).map((img) => {
                        return (
                            <div className="flex w-auto h-pl3">
                                <Image className="object-cover object-center"
                                    src={img.url}
                                    width={img.dimensions.width}
                                    height={img.dimensions.height}
                                />
                            </div>
                        )
                    })}
                </div>
                <p className="w-4/5 text-justify">
                    {props.plantilla.resena}</p>

                <div className="flex w-auto justify-center items-center space-x-8">
                    {props.plantilla.imagenes.slice(2,).map((img) => {
                        return (
                            <div className="flex w-auto h-pl3">
                                <Image className="object-cover object-center"
                                    src={img.url}
                                    width={img.dimensions.width}
                                    height={img.dimensions.height}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } catch (e) {
        console.error(e)
    }
    return <></>
}