import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { urlFor } from "../../../../lib/client";
import { Remove, Add, NavigateBefore } from '@mui/icons-material';
import { StoreNavbar, Ticket } from "../../../exports";
import { useStateContext } from "../../../../context/StateContext"
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ProductDetails = ({ data }) => {
  const [ index, setIndex ] = useState(0);
  const { decQty, incQty, qty, onAdd, modalIsOpen, closeModal } = useStateContext();

  return (
    <div>
      { 
        data && data.image
          ?
          <div>
            <StoreNavbar />
            <Toaster />
            <div className="product-detail">
              <div className='product-detail-container'>
                <Link to="/store" className="navigate-before">
                  <NavigateBefore />
                  <span>Tienda</span>
                </Link>
                <div>
                  <div className='image-container'>
                    <img className="product-detail-image" src={urlFor(data.image && data.image[index])} alt={data.name} />
                  </div>
                  <div className="small-images-container">
                    {data.image?.map((item, i) => (
                      <img src={urlFor(item)} className={i === index ? "small-image selected-image" : "small-image"} onMouseEnter={() => setIndex(i)} alt={data.name} />
                    ))}
                  </div>
                </div>
                <div className="product-detail-desc">
                  <h1>{data.name}</h1>
                  <p className="price">${data.price}</p>

                  <div className="quantity">
                    <h3>Cantidad</h3>
                    <p className="quantity-desc">
                      <span className="remove" onClick={() => decQty()}><Remove /></span>
                    </p>
                    <p className="quantity-desc">
                      <span className="num">{qty}</span>
                    </p>
                    <p className="quantity-desc">
                      <span className="add" onClick={() => incQty()}><Add /></span>
                    </p>
                  </div>

                  <div className="buttons"> 
                    <button className="add-to-cart" type="button" onClick={() => onAdd(data, qty)}>Agregar al Carrito</button>
                  </div>
                  <div className="back-container">
                    <Link className="back-to-store" to="/store"><span>Seguir comprando</span></Link>
                  </div>
                </div>
              </div>
              <div className="features">
                <h4>Características: </h4>
                <p>Incluye:</p>
                <ul>
                  {
                    data?.features.map((feature) => {
                      if (data?.ref) {
                        return <li>{feature} <a href={data?.refFeatures} target="_blank" rel="noreferrer">Click Aquí</a></li>
                      } else {
                        return <li>{feature}</li>
                      }
                    })
                  }
                </ul>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Ticket />
            </Modal>
          </div>
          : <div />
      }
    </div>
  )
}

export default ProductDetails;