import "./cardStyle.css";

function ProjectData(props) {
  const { img, disc } = props.item;
  return (
    <div className="CardContainer">
      <img src={img} alt="project" />
      <div className="disc">
        <h3>Description</h3>
        <p>
          {disc}
          <a href="">Website</a>
        </p>
      </div>
    </div>
  );
}
export default ProjectData;
