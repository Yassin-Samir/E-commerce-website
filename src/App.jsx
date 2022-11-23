import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/products";
import Checkout from "./pages/checkout/Checkout";
import Error from "./pages/404";
function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  );
}

export default App;
