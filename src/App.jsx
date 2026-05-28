import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/Productos/ItemListContainer/ItemListContainer";
import ProductoDetalle from "./componentes/Productos/ProductoDetalle";
import FormularioContainer from "./componentes/form/FormularioContainer";

function App() {
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
              <ItemListContainer />
              <FormularioContainer />
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