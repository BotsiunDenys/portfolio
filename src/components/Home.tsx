import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../style/home.scss";

const Home: React.FC<{}> = () => {
  return (
    <div className="homePage">
      <header className="homePage_header">&#x2f;&#x2f; Denys Botsiun</header>
      <main className="homePage_main">
        <section className="homePage_title">
          <span className="homePage_title_greeting">
            &#x2f;&#x2f; Hi, i'm Denys, a...
          </span>
          <p className="homePage_title_textWrap">
            &#x2774;&nbsp;&quot;
            <span className="homePage_title_text">
              _front-end react developer
            </span>
            &quot;&nbsp;&#x2775;
          </p>
        </section>
        <p className="homePage_decoration">&#60;img&#62;</p>
        <div className="homePage_parallaxImg"></div>
        <p className="homePage_decoration">&#60;/&#62;</p>
      </main>
      <section className="homePage_about">
        <p className="homePage_aboutTitle">&#60;about_me&#62;</p>
        <p className="homePage_aboutSubtitle">
          I am learning frontend for about 1 year...
        </p>
        <Link to="/about" className="homePage_readMore">
          see more
        </Link>
      </section>
      <hr />
      <section className="homePage_projects">
        <p className="homePage_projectsTitle">&#60;projects&#62;</p>
        <p className="homePage_projectsSubtitle">
          During this year of learning i wrote couple of projects...
        </p>
        <Link to="/projects" className="homePage_readMore">
          see more
        </Link>
      </section>
      <p className="homePage_decoration">&#60;img&#62;</p>
        <div className="homePage_parallaxImgSecond"></div>
        <p className="homePage_decoration">&#60;/&#62;</p>
        <Footer />
    </div>
  );
};

export default Home;
