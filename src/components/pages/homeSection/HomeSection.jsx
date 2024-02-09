import scss from "./HomeSection.module.scss";
import show from "../../../assets/show.mp4";

const HomeSection = () => {
  return (
    <div className={scss.HomeSection}>
      <div className={scss.Content}>
        <div className={scss.videoBackground}>
          <h1></h1>
          <video className={scss.video} autoPlay muted loop>
            <source src={show} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
