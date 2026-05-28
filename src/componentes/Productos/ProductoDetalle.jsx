import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductoDetalle() {

  const { id } = useParams()

  const [producto, setProducto] = useState(null)

  useEffect(() => {

    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => {

        const productoEncontrado = data.find(
          p => p.id === parseInt(id)
        )

        setProducto(productoEncontrado)
      })

  }, [id])

  if (!producto) {
    return <h2>Cargando...</h2>
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="300"
      />

      <p>{producto.descripcion}</p>

      <h2>${producto.precio}</h2>
    </div>
  )
}

export default ProductoDetalle