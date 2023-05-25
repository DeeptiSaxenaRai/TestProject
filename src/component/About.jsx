import "./about.css";
import { easeInOut, easeOut, motion } from "framer-motion";
// import myImg from "../../assets/image/deeptinew.jpg";

function About() {
  return (
    <main className="main" id="about">
      <div className="aboutContainer">
        <h1 className="aboutHeading">ABOUT</h1>
        <div className="contentContainer">
          <motion.div
            className="Img"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
          ></motion.div>
          <motion.div
            className="detail"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
          >
            <p>
              I am a front-end developer with a deep passion for designing,
              animations and coding. I have done Master in Computer Aplication.
            </p>
            <p>
              Resides in Bergen, Norway from last 10 years. Whenever not making
              content or writing code then I love cooking, gardening, and
              painting.
            </p>
            <br></br>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
export default About;
