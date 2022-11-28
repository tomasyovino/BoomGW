import { useEffect, useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
import ItemListContainer from "../../../containers/ItemListContainer";
import { customFetch } from "../../../lib/utils/request";
import { StoreNavbar, StoreBanner, FooterBanner, Product, Ticket } from "../../exports";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Store = () => {
  const { modalIsOpen, closeModal } = useStateContext();

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
        items: 1
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Ticket />
        </Modal>
      </div>
    </div>
  )
}

export default Store;