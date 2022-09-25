import { PayPalButtons } from "@paypal/react-paypal-js";
import { useStateContext } from "../context/StateContext";

const PaypalCheckoutButton = ({totalPrice}) => {

    const { purchaseMade } = useStateContext();

    return (
        <PayPalButtons className="paypal-btn"
            style={{
                color: "silver",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill",
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalPrice,
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                await purchaseMade();
                return order;
            }}
        />
    )
}

export default PaypalCheckoutButton;