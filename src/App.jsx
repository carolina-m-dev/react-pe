import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/Productos/ItemListContainer/ItemListContainer";
import ProductoDetalle from "./componentes/Productos/ProductoDetalle";
import FormularioContainer from "./componentes/form/FormularioContainer";

function App() {

  const [productos, setProductos] = useState([]);

  const agregarProducto = (nuevoProducto) => {

    setProductos((prevProductos) => [
      ...prevProductos,
      nuevoProducto
    ]);
  };

  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<h1>Bienvenidos</h1>}
        />

        <Route
          path="/productos"
          element={
            <>
              <ItemListContainer
                productosExtra={productos}
              />

              <FormularioContainer
                agregarProducto={agregarProducto}
              />
            </>
          }
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

        <Route
          path="/carrito"
          element={<h1>Carrito</h1>}
        />

      </Route>

    </Routes>
  );
}

export default App;