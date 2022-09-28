import { Link } from "react-router-dom";

const FooterBanner = ({ footerBanner }) => {
  return (
    
      <div className="footer-banner-container">
        <div className="dotted-background">
            <div className="banner-desc">
              <h3>SÉ VIP</h3>
              <p>Lo mejor de lo mejor, para el mejor de lo mejor</p>
              <Link to={`/product/${footerBanner?.product}`} >
                <button type="button">COMPRAR</button>
              </Link>
            </div>
        </div>
      </div>
  )
}

export default FooterBanner;