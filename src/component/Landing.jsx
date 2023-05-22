import "./landing.css";
import arrow from "../assets/react.svg";

function Landing() {
  return (
    <div className="homeContainer" id="home">
      <h2 className="heading">Hi I'm</h2>
      <h1 className="mainHeading">DEEPTI SAXENA</h1>
      <h2 className="heading">Frontend Developer</h2>
      {/* <div className="fade"> */}
      <a className="fade" href="#about">
        <img src={arrow} />
      </a>
      {/* </div> */}
    </div>
  );
}
export default Landing;
