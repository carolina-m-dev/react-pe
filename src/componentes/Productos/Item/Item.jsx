import { Link } from 'react-router-dom'

function Item({ producto }) {
  return (
    <div className="card-producto">
      <h2>{producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="200"
      />
    <div className="card-contenido">
      <p>${producto.precio}</p>

      <Link to={`/producto/${producto.id}`}>
        Ver detalle
      </Link>
      </div>
    </div>
  )
}

export default Item