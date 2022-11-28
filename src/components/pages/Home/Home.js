import { Banner, About, Gallery, Join, Contact, Ticket } from "../../exports";
import Modal from "react-modal";
import { useStateContext } from "../../../context/StateContext";

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

const Home = () => {
  const { modalIsOpen, closeModal } = useStateContext();

  return (
    <>
      <Banner />
      <About />
      <Gallery />
      <Join />
      <Contact />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Ticket />
      </Modal>
    </>
  )
}

export default Home