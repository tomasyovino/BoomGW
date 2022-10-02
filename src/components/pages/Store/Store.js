import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ItemListContainer from "../../../containers/ItemListContainer";
import { customFetch } from "../../../lib/utils/request";
import { StoreNavbar, StoreBanner, FooterBanner, Product } from "../../exports";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Store = () => {
  const [productData, setProductData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  const productQuery = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;

  useEffect(() => {
    customFetch(productQuery, setProductData)
    customFetch(bannerQuery, setBannerData)
  }, [productQuery, bannerQuery]);

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max:4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
  };

  return (
    <div id="store">
      <Toaster />

      <StoreNavbar />
      <StoreBanner />
      <div className="main-container">
        <div className='products-heading' id="popular">
          <h2>Productos Más Vendidos</h2>
        </div>

        <Carousel responsive={responsive} infinite={true}>
        {
          productData?.map((product) => {
            if (product.popular) {
              return (
                <div key={product._id} className='products-container'>
                  <Product key={product._id} product={product} />
                </div>
              );
            };
            return null;
          })
        }
        </Carousel>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
        <ItemListContainer productData={productData} />
      </div>
    </div>
  )
}

export default Store;