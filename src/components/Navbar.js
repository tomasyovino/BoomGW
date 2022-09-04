import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='#banner'>Sobre Nosotros</Link></li>
        <li><Link to='#banner'>Galería</Link></li>
        <li><Link to='#banner'>Contáctanos</Link></li>
        <li><Link to='#banner'>Tienda</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar