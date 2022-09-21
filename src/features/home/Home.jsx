import "./home.css";
import data from "../../db/MOCK_DATA.json";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useWebApp from "../../hooks/useWebApp";

export default function Home() {
  const cart = useSelector((store) => store.cart);

  const total = cart.reduce((prev, current) => {
    return (prev += current.count * current.product.price);
  }, 0);

  const webApp = useWebApp();

  useEffect(() => {
    if (total > 0) {
      webApp.MainButton.setText(`Satıp alıw: ${total.toLocaleString()} UZS`);
      if (!webApp.MainButton.isVisible) {
        webApp.MainButton.show();
      }
    } else {
      if (webApp.MainButton.isVisible) {
        webApp.MainButton.hide();
      }
    }
  }, [cart, total, webApp]);

  return (
    <div className="container">
      <div className="products">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
