import { Product } from "../../components/exports";
import img1 from "../../assets/img/gallery/gallery1.webp";
import img2 from "../../assets/img/gallery/gallery2.webp";
import img3 from "../../assets/img/gallery/gallery3.webp";
import img4 from "../../assets/img/gallery/gallery4.webp";
import img5 from "../../assets/img/gallery/gallery5.webp";
import img6 from "../../assets/img/gallery/gallery6.webp";
import img7 from "../../assets/img/gallery/gallery7.webp";
import img8 from "../../assets/img/gallery/gallery8.webp";
import aboutUsImg from "../../assets/img/aboutUsImg.webp";

const ImageData = [
    {
      img: img1,
      title: "Image",
    },
    {
      img: img2,
      title: "Image",
    },
    {
      img: img3,
      title: "Image",
    },
    {
      img: img4,
      title: "Image",
    },
    {
      img: img5,
      title: "Image",
    },
    {
      img: img6,
      title: "Image",
    },
    {
      img: img7,
      title: "Image",
    },
    {
      img: img8,
      title: "Image",
    },
];

const AboutSliders = () => {

    return(
    <>
      <div className="slide"
          style={{ 
              minWidth: "100%",
              transition: ".3s ease all",
              position: "relative",
              overflow: "hidden",
              zIndex: "10" 
          }}
        >
        <img className="thumbnail" src={aboutUsImg} alt="Sobre Nosotros" />
      </div>
      <div className="slide"
          style={{ 
              minWidth: "100%",
              transition: ".3s ease all",
              position: "relative",
              overflow: "hidden",
              zIndex: "10" 
          }}
        >
        <iframe src="https://www.youtube.com/embed/UlndbNn5VPU" title="YouTube video player" autoPlay frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="1" className="thumbnail">
          Tu navegador no implementa el elemento <code>video</code>
          </iframe>
      </div>
    </>
)}

const JoinUsSliders = () => {
  return (
    <>
      <div className="slide"
        style={{ 
            minWidth: "100%",
            transition: ".3s ease all",
            position: "relative",
            overflow: "hidden",
            padding: "0 80px",
            zIndex: "10" 
        }}
      >
        <p style={{
              color: "#ffffff",
              fontSize: ".9em",
              lineHeight: "2em",
              margin: "2em auto",
              width: "81%",
              fontWeight: "300",
        }}>Forma parte de una de las mejores comunidades latinoamericanas. Crea tu propia banda, unete a una o ayuda a erradicarlas del mundo. ¡Vuelvete parte de algo más grande que uno mismo! Sólo en BOOMGW</p>
      </div>
      <div className="slide"
        style={{ 
                minWidth: "100%",
                transition: ".3s ease all",
                position: "relative",
                overflow: "hidden",
                padding: "0 80px",
                zIndex: "10" 
            }}
      >
        <p style={{
              color: "#ffffff",
              fontSize: ".9em",
              lineHeight: "2em",
              margin: "2em auto",
              width: "81%",
              fontWeight: "300",
        }}>¡Únete, entrena, compite. Conviertete lo mejor de lo mejor en nuestro ranking de clasificatorias! Muchos lo intentan, sólo pocos lo consiguen ¿Crees tener lo necesario?</p>
      </div>
    </>
  );
}

const StoreSliders = ({productData}) => {
  return (
    <div className='products-container'>
      {
        productData?.map((product) => {
          if (product.popular) {
            return (
                <Product key={product._id} product={product} />
            );
          };
          return null;
        })
      }
    </div>
  );
}

export { ImageData, AboutSliders, JoinUsSliders, StoreSliders };