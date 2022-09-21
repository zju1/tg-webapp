import "./home.css";
import data from "../../db/MOCK_DATA.json";
import Card from "./Card";

export default function Home() {
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
