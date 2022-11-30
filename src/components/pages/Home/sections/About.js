import { Slideshow } from "../../../exports";
import { AboutSliders } from "../../../../lib/utils/constants";
import { Cyclone } from '@mui/icons-material';

const About = () => {
  return (
    <div id="about">
      <div className="meetUs-bx p-1">
        <div className="txt-content">
          <h3>¡Conócenos!</h3>
          <p>¡Bienvenidos a Boom, somos una comunidad especializada en fivem que cuenta con programación propia y única! Llevamos mas de un año con la comunidad y te invitamos a que seas parte de ella!</p>
          <p>Nuestro principal servidor es Boom Gang Wars, especializado a la guerra entre bandas. ¡Una modalidad hiper dinámica en la cual podrás practicar Aim y organización con tus miembros en robos!
          Contamos con sistema unico de pvp, con diferentes tipos de mapeos y un sistema unico de clasificatorias 1 vs 1 donde podran competir entre si por ser el mejor!</p>
        </div>
        <Slideshow  controls="true">
          <AboutSliders />
        </Slideshow>
      </div>

      <div className="servers p-1">
        <h3>Servidores</h3>
        <div className="container">
          <div className="servers-bx">
            <div>
              <h4>Boom Gang Wars</h4>
              <p>Bandas, mafias, deathmath competitivo. Boom Gang Wars es un servidor dinámico y entretenido para pasar el tiempo con tus amigos, mientras compites y mejoras en GTA</p>
            </div>
            <i><Cyclone style={{ fontSize: "24px", zIndex: "5" }} /></i>
          </div>
          <div className="servers-bx">
            <i><Cyclone style={{ fontSize: "24px", zIndex: "5" }} /></i>
            <div>
              <h4>Boom Evolved</h4>
              <p>¿Vivir de tu propia cosecha? Listo. ¿Ser el padrino de la ciudad? Listo. ¿Unirte a las fuerzas policiales y ascender luchando contra el crímen? Listo. ¡Boom Evolved, un servidor de roleplay y deathmath!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;