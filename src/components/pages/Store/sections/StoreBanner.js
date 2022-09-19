import { Link } from "react-router-dom";
import { urlFor } from "../../../../lib/client"

const StoreBanner = ({ bannerData }) => {

  return (
    <div id="storeBanner">
      {
        bannerData && bannerData[0]?.image
          ?
            <div>
              <p className='beats-solo'>{bannerData[0]?.smallText}</p>
              <h3>{bannerData[0]?.midText}</h3>
              {
                bannerData[0]?.image &&
                  <img src={urlFor(bannerData[0]?.image)} alt="product" className='store-banner-image' />
              }
              
              <div>
                <Link to={`/product/${bannerData[0]?.product}`}>
                  <button type='button'>{bannerData[0]?.buttonText}</button>
                </Link>
                <div className='desc'>
                  <h5>Description</h5>
                  <p>{bannerData[0]?.desc}</p>
                </div>
              </div>
            </div>
          : <div />
      }
    </div>
  )
}

export default StoreBanner;