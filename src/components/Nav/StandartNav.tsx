import { Link } from "react-router-dom";
import "../../style/menu.scss";

const StandartNav: React.FC<{}> = () => {
  return (
      <nav className="menu">
        <Link to="." className="menu_link">
          _home
        </Link>
        <Link to="/about" className="menu_link">
          _about
        </Link>
        <Link to="/projects" className="menu_link">
          _projects
        </Link>
        <Link to="/contact" className="menu_link">
          _contact
        </Link>
      </nav>
  );
};

export default StandartNav;
