import { useState } from "react";
import { ImageData } from "../../../../lib/utils/constants";
import { Modal } from "../../../exports";

const Gallery = () => {
  const [ modalState1, setModalState1 ] = useState(false);
  const [ modalState2, setModalState2 ] = useState(false);
  const [ modalState3, setModalState3 ] = useState(false);
  const [ modalState4, setModalState4 ] = useState(false);
  const [ modalState5, setModalState5 ] = useState(false);
  const [ modalState6, setModalState6 ] = useState(false);
  const [ modalState7, setModalState7 ] = useState(false);
  const [ modalState8, setModalState8 ] = useState(false);

  return (
    <>
      <div id="gallery" className="p-1">
        <h3>Galería</h3>
        <div className="image-container">
          <img src={ImageData[0].img} alt={ImageData[0].title} onClick={() => setModalState1(true)} />
          <img src={ImageData[1].img} alt={ImageData[1].title} onClick={() => setModalState2(true)} />
          <img src={ImageData[2].img} alt={ImageData[2].title} onClick={() => setModalState3(true)} />
          <img src={ImageData[3].img} alt={ImageData[3].title} onClick={() => setModalState4(true)} />
          <img src={ImageData[4].img} alt={ImageData[4].title} onClick={() => setModalState5(true)} />
          <img src={ImageData[5].img} alt={ImageData[5].title} onClick={() => setModalState6(true)} />
          <img src={ImageData[6].img} alt={ImageData[6].title} onClick={() => setModalState7(true)} />
          <img src={ImageData[7].img} alt={ImageData[7].title} onClick={() => setModalState8(true)} />
        </div>
      </div>
      
      
        <Modal
          modalState={modalState1}
          setModalState={setModalState1}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[0].img} alt={ImageData[0].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>

        <Modal
          modalState={modalState2}
          setModalState={setModalState2}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[1].img} alt={ImageData[1].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>

        <Modal
          modalState={modalState3}
          setModalState={setModalState3}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[2].img} alt={ImageData[2].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
        
        <Modal
          modalState={modalState4}
          setModalState={setModalState4}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[3].img} alt={ImageData[3].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
        
        <Modal
          modalState={modalState5}
          setModalState={setModalState5}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[4].img} alt={ImageData[4].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
        
        <Modal
          modalState={modalState6}
          setModalState={setModalState6}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[5].img} alt={ImageData[5].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
        
        <Modal
          modalState={modalState7}
          setModalState={setModalState7}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[6].img} alt={ImageData[6].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
        
        <Modal
          modalState={modalState8}
          setModalState={setModalState8}
          showHeader={false}
          padding={"0px"}
        >
          <img src={ImageData[7].img} alt={ImageData[7].title} style={{ width: "100%", height: "auto", border: "1px solid #fff", borderRadius: "5px",}} />
        </Modal>
    </>
  );
}

export default Gallery;