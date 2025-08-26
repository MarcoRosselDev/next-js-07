import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hola cada segundo!");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Temporizador detenido");
    };
  }, []);

  return <div className="alert alert-danger">Modal</div>;
};
export default Modal;