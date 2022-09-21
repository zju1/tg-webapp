import { Route, Routes } from "react-router-dom";
import WebAppProvider from "../context/WebAppProvider";
import Checkout from "../features/checkout/Checkout";
import Complete from "../features/complete/Complete";
import Home from "../features/home/Home";

export default function App() {
  return (
    <WebAppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/complete" element={<Complete />} />
      </Routes>
    </WebAppProvider>
  );
}
