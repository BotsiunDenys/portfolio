import { Link, Outlet } from "react-router-dom";
import "../style/menu.scss";

interface Props {
  visibleNav: boolean;
  setVisibleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ visibleNav, setVisibleNav }: Props) => {
  return (
    <>
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
      <Outlet />
    </>
  );
};

export default Nav;
