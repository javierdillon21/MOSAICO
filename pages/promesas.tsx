import { useEffect, useState } from "react"
import {getNombre} from '../src/promesas'

export default function Ejemplo() {
    var [name,setname]= useState("")

  useEffect(()=>{
      //llamando al server
   //  getNombre.then((str)=> setname(str))
   async function sincro() {
    let nom= await getNombre(10)
    setname(nom)
   }

   sincro()
  },[])

  if(name==="") return <p>Loading</p>
  return (
    <p>hola {name}</p>
  )
}