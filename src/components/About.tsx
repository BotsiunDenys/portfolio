import { skills } from "./data/skills";
import Footer from "./Footer";
import "../style/about.scss";

const About: React.FC<{}> = () => {
  const downloadCV = () => {
    fetch("CV_Botsiun_Denys_frontend_dev.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_Botsiun_Denys_frontend_dev.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="aboutPage">
      <div className="aboutPage_name">&#x2f;&#x2f; Denys Botsiun</div>
      <header className="aboutPage_header">
        <p className="aboutPage_header_textWrap">
          &#x2774;&nbsp;&quot;
          <span className="aboutPage_header_text">_about</span>
          &quot;&nbsp;&#x2775;
        </p>
        <button onClick={downloadCV} className="aboutPage_downloadCV">
          _download_CV
        </button>
      </header>
      <main className="aboutPage_main">
        <section className="aboutPage_section">
          <h2 className="aboutPage_section_title">&#60;skills&#62;</h2>
          <div className="aboutPage_skills">
            {skills.map((skill, index) => (
              <p key={index} className="aboutPage_skills_singleSkill">
                {skill}
              </p>
            ))}
          </div>
        </section>
        <section className="aboutPage_section">
          <h2 className="aboutPage_section_title">&#60;languages&#62;</h2>
          <div className="aboutPage_section_languages">
            <div className="aboutPage_section_singleLang">
              <p className="aboutPage_section_langName">English</p>
              <p className="aboutPage_section_langLevel">B1 - B2</p>
            </div>
            <div className="aboutPage_section_singleLang">
              <p className="aboutPage_section_langName">Ukrainian</p>
              <p className="aboutPage_section_langLevel">Native</p>
            </div>
            <div className="aboutPage_section_singleLang">
              <p className="aboutPage_section_langName">Russian</p>
              <p className="aboutPage_section_langLevel">Fluently</p>
            </div>
          </div>
        </section>
        <section className="aboutPage_section">
          <h2 className="aboutPage_section_title">&#60;education&#62;</h2>
          <div className="aboutPage_education">
            <div className="aboutPage_education_singleSection">
              <div className="aboutPage_educationInfo">
                <h3 className="aboutPage_educationInfo_title">
                  Vasyl' Stus Donetsk National University
                </h3>
                <p className="aboutPage_educationInfo_period">2020 - 2024</p>
                <p className="aboutPage_educationInfo_desc">
                  Computer Science bachelor's degree
                </p>
              </div>
            </div>
            <div className="aboutPage_education_singleSection">
              <div className="aboutPage_educationInfo">
                <h3 className="aboutPage_educationInfo_title">FoxmindEd</h3>
                <p className="aboutPage_educationInfo_period">
                  July 2020 - December 2020
                </p>
                <p className="aboutPage_educationInfo_desc">
                  Front-end mentoring course
                </p>
              </div>
            </div>
          </div>
          <div className="aboutPage_education_certificate"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
