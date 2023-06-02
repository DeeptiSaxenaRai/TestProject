import "./cardStyle.css";
import Parallex from "../../assets/parallex.png";
function ParellexCard() {
  return (
    <div className="CardContainer">
      <img src={Parallex} alt="parallex site" />
      <div className="disc">
        <h3>Parellex</h3>
        <p>
          This website is on parellex effect using advance css. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur ut assumenda
          harum aperiam sapiente iure facilis ipsam? Quis nulla nesciunt vero
          perferendis fugit nihil doloribus consequuntur! Ratione itaque neque
          laudantium.
          <a href="">Website</a>
        </p>
      </div>
    </div>
  );
}
export default ParellexCard;
