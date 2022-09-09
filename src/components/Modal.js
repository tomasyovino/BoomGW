import { Close } from '@mui/icons-material';

const Modal = ({ 
    children,
    modalState,
    setModalState,
    title="Alert!",
    showHeader=true,
    showOverlay=true,
    padding=null,
}) => {
    return (
        <>
            { modalState && 
                <div id="Overlay" onClick={() => setModalState(!modalState)} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddgin: "40px", 
                    width: "100vw", 
                    height: "100vh", 
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    background: showOverlay ? "rgba(0, 0, 0, .5)" : "",
                }}>
                    <div className="modal-container" style={{
                        width: "800px",
                        minHeight: "100px",
                        position: "relative",
                        background: "transparent",
                        borderRadius: "5px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        padding: padding ? padding : "20px",
                    }}>
                        {showHeader &&
                            <div className="modal-header" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                                paddingBottom: "20px",
                                borderBottom: "1px solid #E8E8E8",
                            }}>
                                <h4 style={{ fontWeight: "500", fontSize: "16px", color: "#1766DC"}}>{title}</h4>
                            </div>
                        }

                        <button className="closeButton" onClick={() => setModalState(!modalState)} style={{
                            position: "absolute",
                            top: "15px",
                            right: "20px",
                            width: "30px",
                            height: "30px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            transition: ".3s ease all",
                            borderRadius: "5px",
                            color: "#F44336",
                        }}>
                            <Close />
                        </button>

                        { children }

                    </div>
                </div>
            }
        </>
    );
}

export default Modal;