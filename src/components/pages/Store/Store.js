import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ItemListContainer from "../../../containers/ItemListContainer";
import { customFetch } from "../../../lib/utils/request";
import { StoreNavbar, StoreBanner, FooterBanner, Slideshow } from "../../exports";
import { StoreSliders } from "../../../lib/utils/constants";

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
      <Toaster />

      <StoreNavbar />
      <StoreBanner />
      <div className="main-container">
        <div className='products-heading' id="popular">
          <h2>Productos Más Vendidos</h2>
        </div>

        <Slideshow infinite={true} controls={true}>
          <StoreSliders productData={productData} />
        </Slideshow>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
        <ItemListContainer productData={productData} />
      </div>
    </div>
  )
}

export default Store;