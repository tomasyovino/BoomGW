import { useRef } from "react";
import { Link } from "react-router-dom";
import { Remove, Add, NavigateBefore, LocalMall, RemoveCircle } from '@mui/icons-material';
import { PaypalCheckoutButton } from "../../../exports";
import { useStateContext } from "../../../../context/StateContext";
import { urlFor } from "../../../../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, openModal } = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <NavigateBefore />
          <span className="heading">Tu Carrito</span>
          <span className="cart-num-items">({totalQuantities} producto/s)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <LocalMall style={{fontSize: "150px"}} />
            <h4>Tu carrito de compras está vacío</h4>
            <Link to="/store">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Seguir comprando
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item?._id}>
              <img src={urlFor(item.image[0])} alt={item?.name} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item?.name}</h5>
                  <h4>${item?.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="remove" onClick={() => toggleCartItemQuantity(item?._id, "dec")}><Remove /></span>
                      <span className="num">{item?.quantity}</span>
                      <span className="add" onClick={() => toggleCartItemQuantity(item?._id, "inc")}><Add /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <RemoveCircle />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h4>Subtotal:</h4>
              <h4>${totalPrice}</h4>
            </div>
            <div className="btn-container buttons">
              {/* <PaypalCheckoutButton totalPrice={totalPrice} /> */}
              <button
                type="button"
                className="buy-now"
                onClick={openModal}
              >Ticket</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart