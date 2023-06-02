import "./cardStyle.css";
import Design from "../../assets/design.png";
function DesignCard() {
  return (
    <div className="CardContainer">
      <img src={Design} alt="design site" />
      <div className="disc">
        <h3>Design</h3>
        <p>
          This website is based on design and color combination. Lorem ipsum
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
export default DesignCard;
