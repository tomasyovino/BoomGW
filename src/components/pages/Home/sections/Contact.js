import { Form } from "../../../exports";

const Contact = () => {
  return (
    <div id="contact" className='p-1'>
      <h3>Contáctanos</h3>
      <div className='contact-bx'>
        <div className='get-ticket'>
          <h4>Contáctate con nosotros</h4>
          <p>¿No te gustan los formularios? Puedes contactarnos con nosotros enviando un ticket en nuestro <a href="http://localhost:3000" target="_blank" rel="noreferrer" >Discord</a>.</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Contact