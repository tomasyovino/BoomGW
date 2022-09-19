import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Store, Footer } from "./components/exports";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import './styles/App.css';
import './styles/Responsive.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:idItem" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
