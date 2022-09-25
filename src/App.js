import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Home, Store, Footer } from "./components/exports";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import './styles/App.css';
import './styles/Responsive.css';

const App = () => {
  return (
    <StateContext>
      <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:idItem" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </StateContext>
  );
}

export default App;
