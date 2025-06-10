import Boton from "@/componentes/Boton";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1>Hello Next.js! app/blog (marketing group)</h1>
      <Image src="/trig.png" width={200} height={400} alt="imagen de prueva" priority={true}/>
      <Boton  text="boton de prueba" />
    </div>

  )
  
}