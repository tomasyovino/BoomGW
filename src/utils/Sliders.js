import aboutUsImg from "../assets/img/aboutUsImg.webp";

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
        <iframe src="https://www.youtube.com/embed/UlndbNn5VPU" title="YouTube video player" autoplay frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1" class="thumbnail">
        Tu navegador no implementa el elemento <code>video</code>
        </iframe>
    </div>
  </>
)}

export { AboutSliders };