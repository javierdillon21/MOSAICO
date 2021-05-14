import { type } from "node:os";

// Proyecto: estructura de un proyecto mosaico
interface Proyecto{
    encabezado: Encabezado
    multimedia: PlantillaMultimedia[]
}

//descripción del proyecto y/o sus partes. 
interface PlantillaMultimedia{ 
    resena: string
    imagenes: Imagen[]
    tipo: number
}

//datos generales y portada del proyecto
interface Encabezado{
    nombre: string
    ubicacion: string
    categoria: string
    cliente: string
    ano: string
    portada: Imagen
    descripcion: string
    carrusel: boolean

}

interface Miniatura{
    nombre:string
    portada: Imagen
    categoria: string
    ubicacion: string
}

//Utilities of MOSAICO-DOCUMENTS
type ResultsPrismic = PrismicDocument[]
type PropiedadesPlantillas = '1' | '1R' | '2' | '2R' | '3' | '3R' | '4' | '4R'

interface Texto {
    text: string
}
interface Imagen {
    dimensions: {
        width: number
        height: number
    }
    url: string
    idProyecto?: string
}

//Types of MOSAICO-DOCUMENTS
interface PrismicDocument {
    id: string
    data: {
        body: Slice[]
    }
}

interface Slice {
    slice_type: string
    items: BodyItems[]
    primary: BodyPrimary
}

interface BodyItems {
    imagen: Imagen
}

interface BodyPrimary {
    ano: string
    cliente: Texto[]
    categoria: string
    nombre: Texto[]
    ubicacion: Texto[]
    portada: Imagen
    descripcion: Texto[]
    resena: Texto[]
    carrusel: boolean
}

