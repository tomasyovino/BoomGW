import { Navbar, ScrollToTop, Cart } from "../../../exports";
import { useStateContext } from "../../../../context/StateContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from '@mui/icons-material';
import logo from "../../../../assets/img/logo.png";
import { Instagram } from '@mui/icons-material/';
import discordIcon from "../../../../assets/img/discord.png";
import tiktokIcon from "../../../../assets/img/tiktok.png";

const Banner = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div id="banner">
      <div className='dotted-background'>
        <div className="header-top">
          <Link to="/" className="left">
              <h1>BOOM</h1>
              <h4>GangWars</h4>
          </Link>
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <ShoppingCart />
            {
              totalQuantities >= 1 &&
                <span className="cart-item-qty">{totalQuantities}</span>
            }
          </button>
          { showCart && <Cart /> }
        </div>
        <Navbar />

        <div className="networks">
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" > <img src={discordIcon} alt="Discord" /></a>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" ><Instagram /></a>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" ><img src={tiktokIcon} alt="Tik Tok" /></a>
        </div>

        <img src={logo} alt="BoomGW" id="logo" />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default Banner