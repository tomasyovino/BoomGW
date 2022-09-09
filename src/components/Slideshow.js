import { useRef, useEffect, useCallback, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Slideshow = ({
    children,
    controls = false,
    autoplay = false,
    speed = 500,
    interval = 5000,
    infinite = false,
    opacityRule = false,
  }) => {

  const carousel = useRef(null);
  const slideshowInterval = useRef(null);

  const [ limitLeftReached, setLimitLeftReached ] = useState(true);
  const [ limitRightReached, setLimitRightReached ] = useState(true);

  const nextSlide = useCallback(() => {
    // Check that the Carousel has elements
    if (carousel.current.children.length > 0) {
      const sliderSize = carousel.current.children[0].offsetWidth;
      // Get the first element from the carousel
      const firstElement = carousel.current.children[0];

      // Set the transition between sliders
      carousel.current.style.transition = `${speed}ms ease-in-out all`;

      // Move slider
      if(!opacityRule) {
        carousel.current.style.transform = `translateX(-${sliderSize}px)`;
      } else {
        carousel.current.style.opacity = 0;
      }

      
      const transition = () => {
        if(!opacityRule) {
          // Reset Carousel position
          carousel.current.style.transition = "none";
          carousel.current.style.transform = "translateX(0)";
          // Send first element to the end of the Carousel
          carousel.current.appendChild(firstElement);
          carousel.current.removeEventListener("transitionend", transition);
        } else {
          carousel.current.style.transition = `${speed}ms ease-in-out all`;
          carousel.current.style.opacity = 1;
          // Send first element to the end of the Carousel
          carousel.current.appendChild(firstElement);
          carousel.current.removeEventListener("transitionend", transition);
        }
      }
      
      // Event Listener
      if (infinite) {
        carousel.current.addEventListener("transitionend", transition);
      } else {
        carousel.current.addEventListener("transitionend", setLimitRightReached(true), setLimitLeftReached(false))
      }
    }
  }, [speed, infinite, opacityRule]);

  const previousSlide = () => {
    // Check that the Carousel has elements
    if (carousel.current.children.length > 0) {
      // Get the last element from the carousel
      const index = carousel.current.children.length - 1;
      const lastElement = carousel.current.children[index];
      if (infinite) {
        carousel.current.insertBefore(lastElement, carousel.current.firstChild);
      } else {
        carousel.current.addEventListener("transitionend", setLimitRightReached(false), setLimitLeftReached(true))
      }

      carousel.current.style.transition = "none";
      const sliderSize = carousel.current.children[0].offsetWidth;
      carousel.current.style.transform = `translateX(-${sliderSize}px)`;

      setTimeout(() => {
        carousel.current.style.transition = `${speed}ms ease-out all`;
        carousel.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  useEffect(() => {
    if (!infinite)
    setLimitRightReached(false)
  }, [infinite]);
  
  useEffect(() => {
    if (autoplay && infinite) {
      slideshowInterval.current = setInterval(() => {
          nextSlide();
      }, interval);
    }
  }, [autoplay, infinite, interval, nextSlide]);

  return (
    <div id="slideshow" style={{ position: "relative", overflow: "hidden"}}>
      {/* {<-- CAROUSEL -->} */}
      <div id="Carousel" ref={carousel} style={{ display: "flex", flexWrap: "nowrap" }}>
        {children}
      </div>
      {/* {<-- CONTROLS -->} */}
      { controls &&
        <div id="controls" style={{ position: "absolute", top: "0", width: "100%", height: "100%", zIndex: "20", pointerEvents: "none" }}>
          <button style={{ pointerEvents: "all", background: "none", border: "none", cursor: "pointer", outline: "none", height: "100%", position: "absolute", left: "0", transition: ".3s ease all", display: limitLeftReached && !infinite ? "none" : "block" }}
            onClick={previousSlide}
          >
            <KeyboardArrowLeft style={{ fontSize: "100px", opacity: ".7" }} />
          </button>
          <button style={{ pointerEvents: "all", background: "none", border: "none", cursor: "pointer", outline: "none", height: "100%", position: "absolute", right: "0", transition: ".3s ease all", display: limitRightReached && !infinite ? "none" : "block" }}
            onClick={nextSlide}
          >
            <KeyboardArrowRight style={{ fontSize: "100px", opacity: ".7" }} />
          </button>
        </div>
      }
    </div>
  )
}

export default Slideshow;