import { ScrollToTop } from "../../../exports";

const StoreBanner = () => {

  return (
    <div id="storeBanner">
      <div className='dotted-background'>
        <span>"Cuando los ricos hacen guerra, son los pobres los que mueren..."</span>
        <div>
          <a href='#popular'><p>Observa y aprende</p></a>
          <a href='#categories'><p>Ármate de valor</p></a>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default StoreBanner;