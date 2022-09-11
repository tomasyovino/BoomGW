import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href='#about'>Sobre Nosotros</a></li>
        <li><a href='#gallery'>Galería</a></li>
        <li><a href='#contact'>Contáctanos</a></li>
        <li><Link to='/store'>Tienda</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar