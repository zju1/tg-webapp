import "./home.css";
import data from "../../db/MOCK_DATA.json";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import useWebApp from "../../hooks/useWebApp";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const cart = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const total = cart.reduce((prev, current) => {
    return (prev += current.count * current.product.price);
  }, 0);

  const goCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  const webApp = useWebApp();

  useEffect(() => {
    if (total > 0) {
      webApp.MainButton.setText(`SATÍP ALÍW: ${total.toLocaleString()} UZS`);
      if (!webApp.MainButton.isVisible) {
        webApp.MainButton.show();
        webApp.MainButton.onClick(goCheckout);
      }
    } else {
      if (webApp.MainButton.isVisible) {
        webApp.MainButton.hide();
        webApp.MainButton.offClick(goCheckout);
      }
    }

    return () => webApp.MainButton.offClick(goCheckout);
  }, [cart, goCheckout, total, webApp]);

  return (
    <div className="container">
      <div className="products">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <Link to="/checkout">Kettik</Link>
    </div>
  );
}
