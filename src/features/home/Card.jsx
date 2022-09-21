import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../app/appSlice";
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
      <img src={data.image} alt={data.name} />
      <div className="card-info">
        <p>{data.name}</p>
        <h5>{data.price.toLocaleString()} UZS</h5>
      </div>
      <div
        className={`card_buttons ${
          inCart > 0 ? "card_buttons-two_column" : ""
        }`}
      >
        {inCart !== 0 && (
          <>
          <button onClick={handleDecrease} className="btn-decrease">
            -
          </button>
          <div className="count">
            {inCart}
          </div>
          </>
        )}
        {}
        <button onClick={handleIncrease} className="btn-increase">
          {inCart === 0 ? "Add to cart" : "+"}
        </button>
      </div>
    </div>
  );
}
