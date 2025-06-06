import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/*  */}
      <h1>Hola mundo!</h1>
      <Image src="/trig.png" width={200} height={400} alt="imagen de prueva"/>
    </div>
  )
}