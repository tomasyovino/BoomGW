import { useEffect, useState } from "react";
import { customFetch } from "../../../lib/utils/request";
import { StoreNavbar, StoreBanner, Product, FooterBanner } from "../../exports";

const Store = () => {
  const [productData, setProductData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  const productQuery = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;

  useEffect(() => {
    customFetch(productQuery, setProductData)
    customFetch(bannerQuery, setBannerData)
  }, [productQuery, bannerQuery])

  return (
    <div id="store">

      <StoreNavbar />

      <div className="main-container">
        <StoreBanner bannerData={bannerData} />

        <div className='products-heading'>
          <h2>Productos Más Vendidos</h2>
          <p>Un párrafo</p>
        </div>

        <div className='products-container'>
          {productData?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </div>
  )
}

export default Store;