import { useDispatch, useSelector } from "react-redux";
import "./checkout.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import useWebApp from "../../hooks/useWebApp";
import { useCallback, useEffect } from "react";
import { clear } from "../../app/appSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart);
  const webApp = useWebApp();
  const dispatch = useDispatch();
  const total = items.reduce((prev, current) => {
    return (prev += current.count * current.product.price);
  }, 0);

  const goback = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const completeOrder = useCallback(() => {
    navigate("/checkout/complete");
    dispatch(clear());
  }, [dispatch, navigate]);

  useEffect(() => {
    webApp.BackButton.onClick(goback);
    webApp.BackButton.show();
    webApp.MainButton.setText(
      `BUYÍRTPANÍ JIBERIW: ${total.toLocaleString()} UZS`
    );
    webApp.MainButton.onClick(completeOrder);
    webApp.MainButton.show();

    return () => {
      webApp.BackButton.offClick(goback);
      webApp.BackButton.hide();
      webApp.MainButton.offClick(completeOrder);
      webApp.MainButton.hide();
    };
  }, [completeOrder, goback, total, webApp.BackButton, webApp.MainButton]);

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
