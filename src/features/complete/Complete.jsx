import { Link } from "react-router-dom";
import completeGif from "../../assets/images/complete.gif";
import "./complete.css";

export default function Complete() {
  return (
    <div className="container">
      <div className="complete">
        <img src={completeGif} alt="Complete order" />
        <p>
          Sizdiń buyırtpańız qabıl etildi. Bizdiń xizmetlerimizden paydalanıp
          atırǵanıńız ushın minnetdarshılıǵımızdı bildiremiz ! <br /> Buyırtpa
          tártip nomeri: <code> #{Math.floor(Math.random() * 80000)} </code>
        </p>
        <Link to="/">Bas betke qaytıw</Link>
      </div>
    </div>
  );
}
