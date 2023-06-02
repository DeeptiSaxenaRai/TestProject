import "./cardStyle.css";
import HTML from "../../assets/animation.png";
function HTMLCard() {
  return (
    <div className="CardContainer">
      <img src={HTML} alt="HTML animation" />
      <div className="disc">
        <h3>HTML</h3>
        <p>
          This website is based on animation using HTML and CSS .Lorem ipsum
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
export default HTMLCard;
