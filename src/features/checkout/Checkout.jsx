import { useSelector } from "react-redux";
import "./checkout.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import useWebApp from "../../hooks/useWebApp";
import { useCallback, useEffect } from "react";

export default function Checkout() {
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart);
  const webApp = useWebApp();

  const goback = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    webApp.BackButton.onClick(goback);
    webApp.BackButton.show();

    return () => {
      webApp.BackButton.offClick(goback);
      webApp.BackButton.hide();
    };
  }, [goback, webApp.BackButton]);

  return (
    <div className="container">
      <div className="checkout">
        <div className="checkout-header">
          <h3>Sizdiń buyırtpańız</h3>
          <button onClick={() => navigate("/")}>Ózgertiw</button>
        </div>
        <div className="checkout-list">
          {items.map((item) => (
            <Item data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
