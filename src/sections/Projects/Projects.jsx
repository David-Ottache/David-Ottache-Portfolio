import styles from "./ProjectsStyles.module.css";
import Bankk from "../../assets/Bankk.jpg";
import RestaurantPhoto from "../../assets/Restaurant-photo.jpg";
import Lastt from "../../assets/Lastt.jpg";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.stcontainer}>
          <ProjectCard
            src={RestaurantPhoto}
            link="https://otteez-restaurant.vercel.app/"
            h3="Restaurant Web"
            p="The Art of Fine Dining"
          />
          <p className={styles.specialtext}>
            <a
              href={
                "https://github.com/David-Ottache/Otteez-Restaurant/tree/main/otteez"
              }
            >
              Source code
            </a>
          </p>
        </div>
        <div className={styles.stcontainer}>
          <ProjectCard
            src={Bankk}
            link="https://bank-modern-app-eight-sigma.vercel.app/"
            h3="Bank App"
            p="bank app design"
          />
          <p className={styles.specialtext}>
            <a
              href={
                "https://github.com/David-Ottache/Bank_modern_app/tree/main/bank_modern_app"
              }
            >
              Source code
            </a>
          </p>
        </div>

        <div className={styles.stcontainer}>
          <ProjectCard
            src={Lastt}
            link="https://gpt-dav.vercel.app/"
            h3="GPT-3"
            p="Informative Web App"
          />
          <p className={styles.specialtext}>
            <a
              href={
                "https://github.com/David-Ottache/gpt_dav/tree/main/davotta"
              }
            >
              Source code
            </a>
          </p>
        </div>

        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
