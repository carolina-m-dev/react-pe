import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="header">
       <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;