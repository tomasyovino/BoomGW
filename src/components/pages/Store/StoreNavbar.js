import { Link } from "react-router-dom";
import { ShoppingCart } from '@mui/icons-material';

const StoreNavbar = () => {
  return (
    <div className="header-top">
        <Link to="/" className="left">
            <h1>BOOM</h1>
            <h4>GangWars</h4>
        </Link>
        <span className="right"><ShoppingCart /></span>
    </div>
  )
}

export default StoreNavbar;