import { Slideshow } from "../../../exports";
import { JoinUsSliders } from "../../../../lib/utils/constants";
import discordIcon from "../../../../assets/img/discord.png";

const Join = () => {
  return (
    <div id='joinUs'>
      <div className="dotted-background">
        <div className='txt-container'>
          <h3>¡Únete a Nosotros!</h3>
          <Slideshow autoplay={true} infinite={true} opacityRule={true} speed="500" interval="7000">
            <JoinUsSliders />
          </Slideshow>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" > <img src={discordIcon} alt="Discord" /></a>
        </div>
      </div>
    </div>
  )
}

export default Join;