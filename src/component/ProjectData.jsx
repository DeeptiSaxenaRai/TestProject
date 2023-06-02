import "./project.css";
import Pokemon from "../assets/Pokemon.jpg";
import Parallex from "../assets/Parallex.png";
function ProjectData() {
  return (
    <main class="mainContainer">
      <div>
        <img src={Pokemon} alt="pokemon pics" />
        <div>
          <h1>API</h1>
          <p>This project is based on API using javascript language.</p>
          <a href="">Website</a>
        </div>
      </div>
      <div>
        <img src={Parallex} alt="parallex site" />
        <div>
          <h1>Parellex</h1>
          <p>This website is on parellex effect using advance css.</p>
          <a href="">Website</a>
        </div>
      </div>
    </main>
  );
}
export default ProjectData;
