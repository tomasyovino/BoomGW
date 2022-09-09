import { Navbar } from "../../../exports";
import { PhoneIphone, Email, ShoppingCart } from '@mui/icons-material';
import logo from "../../../assets/img/logo.png";
import { Instagram } from '@mui/icons-material/';
import discordIcon from "../../../assets/img/discord.png";
import tiktokIcon from "../../../assets/img/tiktok.png";

const Banner = () => {
  return (
    <div id="banner">
      <div className='dotted-background'>
        <div className="header-top">
          <div className="left">
            <h1>BOOM</h1>
            <h4>GangWars</h4>
          </div>
          <div className="middle">
            <PhoneIphone />
            <span>+123 456 7890</span>
            <Email />
            <span>info@example.com</span>
          </div>
          <span className="right"><ShoppingCart /></span>
        </div>
        <Navbar />

        <div className="networks">
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" > <img src={discordIcon} alt="Discord" /></a>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" ><Instagram /></a>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" ><img src={tiktokIcon} alt="Tik Tok" /></a>
        </div>

        <img src={logo} alt="BoomGW" id="logo" />
      </div>
    </div>
  )
}

export default Banner