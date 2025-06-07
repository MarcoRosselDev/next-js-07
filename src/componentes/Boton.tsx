import styles from "@/estilos/boton.module.css";

export default function Boton(props: any) {
  
  const { text } = props
  console.log(" componente boton:", props, typeof props);
  return (
    <button className={styles.boton}>{text}</button>
  )
}