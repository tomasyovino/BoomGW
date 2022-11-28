import { useStateContext } from "../context/StateContext";

const Ticket = () => {
  const { totalPrice, cartItems, closeModal } = useStateContext();

  const uniqueID = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
  };

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h2>¡Un último paso!</h2>
        <p>Captura tu ticket y envíalo a la sección "Tickets" de nuestro <a href="https://discord.gg/boomgw" target="_blank" rel="noreferrer">Discord</a></p>
      </div>
      <div className="ticket-body">
        <h5>Ticket: {uniqueID()}</h5>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map(item => (
                <tr>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>{item?.quantity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <span>Total: ${totalPrice}</span>
        <button onClick={closeModal}>Aceptar</button>
      </div>
    </div>
  )
}

export default Ticket