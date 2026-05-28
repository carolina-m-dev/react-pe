function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio
}) {

  return (

    <form onSubmit={manejarEnvio}>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={datosForm.nombre}
        onChange={manejarCambio}
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={datosForm.precio}
        onChange={manejarCambio}
      />

      <button type="submit">
        Guardar
      </button>

    </form>
  )
}

export default FormularioProducto