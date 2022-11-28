import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  let foundProduct;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} agregado/s al carrito.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    const products = cartItems.map((product) => {
      if (product._id === id) {
        if (value === "inc") {
          product.quantity = product.quantity + 1;
          setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        } else if (value === "dec" && product.quantity > 1) {
          product.quantity = product.quantity - 1;
          setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        }
      }
      return product;
    });
    console.log(products);
    setCartItems([...products]);
  };

  const purchaseMade = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      } else {
        return prevQty - 1;
      }
    });
  };

  const openModal = () => {
    setShowCart(false)
    setIsOpen(true);
  };

  const closeModal = () => {
    purchaseMade();
    setIsOpen(false);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        openModal,
        setShowCart,
        modalIsOpen,
        closeModal,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
        purchaseMade,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
