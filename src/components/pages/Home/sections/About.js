import { Slideshow } from "../../../exports";
import { AboutSliders } from "../../../../lib/utils/constants";
import { Cyclone } from '@mui/icons-material';

const About = () => {
  return (
    <div id="about">
      <div className="meetUs-bx p-1">
        <div className="txt-content">
          <h3>¡Conócenos!</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
              <h4>Boom Rush Academy</h4>
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <i><Cyclone style={{ fontSize: "24px", zIndex: "5" }} /></i>
          </div>
          <div className="servers-bx">
            <i><Cyclone style={{ fontSize: "24px", zIndex: "5" }} /></i>
            <div>
              <h4>Boom Evolved</h4>
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
          </div>
          <div className="servers-bx">
            <i><Cyclone style={{ fontSize: "24px", zIndex: "5" }} /></i>
            <div>
              <h4>Boom Gang Wars</h4>
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;