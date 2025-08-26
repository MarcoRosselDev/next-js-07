import { useState } from "react";
import Modal from "../Modal.tsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <h1>useEffect</h1>
      <button
        className={`btn btn-${!isOpen ? "success" : "warning"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "Abrir" : "Cerrar"} modal
      </button>

      <div className="my-5">{isOpen && <Modal />}</div>
    </div>
  );
};

export default App;