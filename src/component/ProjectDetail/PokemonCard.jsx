import "./cardStyle.css";
import Pokemon from "../../assets/Pokemon.jpg";
function PokemonCard() {
  return (
    <div className="CardContainer">
      <img src={Pokemon} alt="pokemon pics" />
      <div className="disc">
        <h3>API</h3>
        <p>
          This project is based on API using javascript language. Lorem ipsum
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
export default PokemonCard;
