import { Link } from "react-router-dom";
import { ShoppingCart } from '@mui/icons-material';
import { Cart } from "../../exports";
import { useStateContext } from "../../../context/StateContext";

const StoreNavbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="header-top">
        <Link to="/" className="left">
          <h1>BOOM</h1>
          <h4>GangWars</h4>
        </Link>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <ShoppingCart />
          {totalQuantities >= 1 &&
          <span className="cart-item-qty">{totalQuantities}</span>
          }
        </button>

        { showCart && <Cart /> }
    </div>
  )
}

export default StoreNavbar;