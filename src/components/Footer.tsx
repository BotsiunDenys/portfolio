import { Link } from "react-router-dom";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer_socials">
        <Link className="footer_singleSocial" to="https://t.me/denisbots">
          <BsTelegram />
        </Link>
        <Link
          className="footer_singleSocial"
          to="https://www.linkedin.com/in/denys-botsiun"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="footer_singleSocial"
          to="https://github.com/BotsiunDenys"
        >
          <BsGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
