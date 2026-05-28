import { useState } from 'react'
import FormularioProducto from './FormularioProducto'

function FormularioContainer() {

  const [datosForm, setDatosForm] = useState({
    nombre: '',
    precio: ''
  })

  const manejarCambio = (e) => {

    const { name, value } = e.target

    setDatosForm({
      ...datosForm,
      [name]: value
    })
  }

  const manejarEnvio = (e) => {

    e.preventDefault()

    console.log(datosForm)
  }

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
    />
  )
}

export default FormularioContainer