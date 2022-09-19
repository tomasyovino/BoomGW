import { useState } from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../../../lib/client";
import { Remove, Add } from '@mui/icons-material';
import StoreNavbar from "../StoreNavbar";

const ProductDetails = ({ data }) => {
  const [ index, setIndex ] = useState(0);

  return (
    <div>
      { 
        data && data.image
          ?
          <div>
            <StoreNavbar />
            <div className='product-detail-container'>
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
                <h4>Details: </h4>
                <p>{data.details}</p>
                <p className="price">${data.price}</p>

                <div className="quantity">
                  <h3>Quantity</h3>
                  <p className="quantity-desc">
                    <span className="remove" onClick=""><Remove /></span>
                  </p>
                  <p className="quantity-desc">
                    <span className="num" onClick="">0</span>
                  </p>
                  <p className="quantity-desc">
                    <span className="add" onClick=""><Add /></span>
                  </p>
                </div>

                <div className="buttons"> 
                  <button className="add-to-cart" type="button" onClick="">Add to Cart</button>
                  <button className="buy-now" type="button" onClick="">Buy Now</button>
                </div>
                <div className="back-container">
                  <Link className="back-to-store" to="/store"><span>Seguir comprando</span></Link>
                </div>
              </div>
            </div>
          </div>
          : <div />
      }
    </div>
  )
}

export default ProductDetails;


            // <div>
            //   <span>{data.name}</span>
            //   <span>{data.price}</span>
            //   <img src={urlFor(data.image && data.image[0])} alt={data.name} className='store-banner-image' />
            // </div>