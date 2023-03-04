import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "../style/menu.scss";

interface Props {
  visibleNav: boolean;
  setVisibleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ visibleNav, setVisibleNav }: Props) => {
  return (
    <>
      <nav className={!visibleNav ? "menu" : "menu menuWide"}>
        <div
          className="menu_openMenu"
          onClick={() => setVisibleNav((prev) => !prev)}
        >
          <div className="menu_openMenu_bar"></div>
          <div className="menu_openMenu_bar"></div>
          <div className="menu_openMenu_bar"></div>
        </div>
        <Link to="." className="menu_link">
          <AiFillHome className="menu_link_icon" />
          <span
            className={
              !visibleNav ? "menu_link_undertext" : "menuWide_visibleUndertext"
            }
          >
            Home
          </span>
        </Link>
        <Link to="/about" className="menu_link">
          <FiSearch className="menu_link_icon" />
          <span
            className={
              !visibleNav ? "menu_link_undertext" : "menuWide_visibleUndertext"
            }
          >
            About
          </span>
        </Link>
        <Link to="/projects" className="menu_link">
          <BsCodeSlash className="menu_link_icon" />
          <span
            className={
              !visibleNav ? "menu_link_undertext" : "menuWide_visibleUndertext"
            }
          >
            Projects
          </span>
        </Link>
        <Link to="/contact" className="menu_link">
          <AiFillContacts className="menu_link_icon" />
          <span
            className={
              !visibleNav ? "menu_link_undertext" : "menuWide_visibleUndertext"
            }
          >
            Contact
          </span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
