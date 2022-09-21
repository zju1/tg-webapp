import assets from "../../assets";

export default function Item({ data }) {
  return (
    <div className="item">
      <img src={assets[data.product.id - 1]} alt={data.product.name} />
      <div className="item-info">
        <p>
          {" "}
          {data.product.name} ...... {data.count} dana{" "}
        </p>
        <h5> {data.product.price.toLocaleString()} UZS </h5>
      </div>
    </div>
  );
}
