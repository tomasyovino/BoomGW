import { useEffect, useState } from "react";
import { Navigation } from '@mui/icons-material';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return(
        <>
            {showTopBtn && (
                <div className='top-to-btm'>
                    
                        <Navigation 
                            className="icon-position icon-style"
                            onClick={goToTop}
                        />
                    
                </div>
            )}
        </>
    );
}

export default ScrollToTop;