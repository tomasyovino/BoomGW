import img1 from "../assets/img/gallery/gallery1.webp";
import img2 from "../assets/img/gallery/gallery2.webp";
import img3 from "../assets/img/gallery/gallery3.webp";
import img4 from "../assets/img/gallery/gallery4.webp";
import img5 from "../assets/img/gallery/gallery5.webp";
import img6 from "../assets/img/gallery/gallery6.webp";
import img7 from "../assets/img/gallery/gallery7.webp";
import img8 from "../assets/img/gallery/gallery8.webp";
import aboutUsImg from "../assets/img/aboutUsImg.webp";

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
        }}>Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, consectetur a mollis ac, cursus eu ipsum.</p>
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
        }}>Pellentesque urna ex, ultricies a nunc at, pretium maximus nisi. Vestibulum non auctor diam. Mauris eget consectetur mauris. Aenean leo elit, accumsan vel elit vitae, mattis ultricies lacus. Cras consectetur justo lorem, sed dictum sapien eleifend at.Donec sed orci a dui aliquam tempor. Praesent in ipsum ut nunc porttitor lacinia.Donec eu sapien et arcu dictum rutrum.Ut laoreet vitae augue at accumsan. Nam pharetra sagittis purus et condimentum. Vestibulum cursus porttitor pretium.In egestas finibus rutrum. Nulla facilisi.</p>
      </div>
    </>
  );
}

export { ImageData, AboutSliders, JoinUsSliders };