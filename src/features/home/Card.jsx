import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../app/appSlice";
import assets from "../../assets";
import useInCart from "../../hooks/useInCart";

export default function Card({ data }) {
  const inCart = useInCart(data.id);
  const dispatch = useDispatch();

  const handleIncrease = useCallback(() => {
    dispatch(increase(data));
  }, [data, dispatch]);
  const handleDecrease = useCallback(() => {
    dispatch(decrease(data.id));
  }, [data.id, dispatch]);

  return (
    <div className="card">
      <div className="card-content">
        <img src={assets[data.id - 1]} alt={data.name} />
        <div className="card-info">
          <p>{data.name}</p>
          <h5>{data.price.toLocaleString()} UZS</h5>
        </div>
      </div>
      <div
        className={`card_buttons`}
      >
        <button onClick={handleDecrease} className="btn-decrease">
          -
        </button>
        <div className="count">{inCart}</div>
        <button onClick={handleIncrease} className={`btn-increase ${inCart ? 'collapsed' : ''}`}>
          {inCart === 0 ? "Sebetke qosıw" : "+"}
        </button>
      </div>
    </div>
  );
}
