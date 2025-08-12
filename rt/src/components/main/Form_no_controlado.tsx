import { useRef, type FormEvent } from "react";

// uncontrollable form
export default function Form_no_controlado() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;
    // Create the FormData object from the form
    const formData = new FormData(formRef.current);
    // Get values using get()
    const username = formData.get("username");
    const color = formData.get("color");
    const accept = !!formData.get("accept"); // Convert to boolean

    console.log({
      username,
      color,
      accept,
    });
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="container row" >
      {/* color favorito */}
      <select name="color">
        <option value="red">red</option>
        <option value="green">green</option>
      </select>
      {/* terminos y condiciones */}
      <label>terminos y condiciones
        <input type="checkbox" name="accept"/>
      </label>
      {/* nombre de usuario */}
      <label>
        <input type="text" name="username" placeholder="name..." />
      </label>
      <button type="submit">send</button>
    </form>
  )
}