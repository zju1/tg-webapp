import { Route, Routes } from "react-router-dom";
import WebAppProvider from "../context/WebAppProvider";
import Home from "../features/home/Home";

export default function App() {
  return (
    <WebAppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WebAppProvider>
  );
}
