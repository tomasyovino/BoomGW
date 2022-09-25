import { Link } from "react-router-dom";
import { urlFor } from "../../../../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <Link to={`/product/${footerBanner?.product}`} >
      <div className="footer-banner-container">
          <div className="banner-desc">
            <div className="left">
              <p>{footerBanner?.discount}</p>
              <h3>{footerBanner?.largeText1}</h3>
              <h3>{footerBanner?.largeText2}</h3>
              <p>{footerBanner?.saleTime}</p>
            </div>

            <div className="right">
              <p>{footerBanner?.smallText}</p>
              <h3>{footerBanner?.midText}</h3>
              <p>{footerBanner?.desc}</p>
                <button type="button">{footerBanner?.buttonText}</button>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default FooterBanner;