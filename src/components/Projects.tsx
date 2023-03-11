import { projects } from "./data/projects";
import Footer from "./Footer";
import "../style/projects.scss";
import { Link } from "react-router-dom";

const Projects: React.FC<{}> = () => {
  return (
    <div className="projectsPage">
      <div className="projectsPage_name">&#x2f;&#x2f; Denys Botsiun</div>
      <header className="projectsPage_header">
        <p className="projectsPage_header_textWrap">
          &#x2774;&nbsp;&quot;
          <span className="projectsPage_header_text">_projects</span>
          &quot;&nbsp;&#x2775;
        </p>
      </header>
      <main className="projectsPage_main">
        {projects.map((project) => (
          <section key={project.id} className="projectsPage_singleProject">
            <p className="projectsPage_singleProject_title">{project.name}</p>
            <Link
              to={project.link}
              className={`projectsPage_singleProject_img ${project.name}Img`}
            />
            <p className="projectsPage_singleProject_description">
              {project.description}
            </p>
            <div className="projectsPage_singleProject_skills">
              {project.stack.map((skill, index) => (
                <p
                  key={index}
                  className="projectsPage_singleProject_singleSkill"
                >
                  {skill}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
