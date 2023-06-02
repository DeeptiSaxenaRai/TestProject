import "./cardStyle.css";
import Wish from "../../assets/Jule-assingment.png";
function ChristmasCard() {
  return (
    <div className="CardContainer">
      <img src={Wish} alt="Christmis site" />
      <div className="disc">
        <h3>Wish-List</h3>
        <p>
          This website is based on Christmas project. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur ut assumenda harum aperiam
          sapiente iure facilis ipsam? Quis nulla nesciunt vero perferendis
          fugit nihil doloribus consequuntur! Ratione itaque neque laudantium.
          <a href="">Website</a>
        </p>
      </div>
    </div>
  );
}
export default ChristmasCard;
