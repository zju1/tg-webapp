import { useSelector } from "react-redux";
import "./checkout.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart);

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
