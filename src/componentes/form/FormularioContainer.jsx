import { useState } from "react";

import FormularioProducto from "./FormularioProducto";

function FormularioContainer({ agregarProducto }) {

  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    imagen: ""
  });

  const manejarCambio = (e) => {

    const { name, value } = e.target;

    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  const manejarEnvio = (e) => {

    e.preventDefault();

    const nuevoProducto = {
      id: Date.now(),
      nombre: datosForm.nombre,
      precio: datosForm.precio,
      imagen: datosForm.imagen
    };

    agregarProducto(nuevoProducto);

    setDatosForm({
      nombre: "",
      precio: "",
      imagen: ""
    });
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
    />
  );
}

export default FormularioContainer;