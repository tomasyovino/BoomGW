import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Store, Footer } from "./exports";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
