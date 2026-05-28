import { useEffect, useState } from "react";

import Item from "../Item/Item";

function ItemListContainer({ productosExtra }) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });

  }, []);

  const todosLosProductos = [
    ...productos,
    ...productosExtra
  ];

  return (

    <>
      <h1>Productos</h1>

      <div className="productos-container">

        {todosLosProductos.map((producto) => (

          <Item
            key={producto.id}
            producto={producto}
          />

        ))}

      </div>
    </>
  );
}

export default ItemListContainer;