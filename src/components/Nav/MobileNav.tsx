import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillContacts,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import "../../style/menu.scss";

const MobileNav: React.FC<{}> = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
      <nav className="mobileMenu">
        <AiOutlineMenu
          className="mobileMenu_toggleIcon"
          onClick={() => setVisibleMenu((prev) => !prev)}
        />
        <div
          className={
            visibleMenu
              ? "mobileMenu_navigation"
              : "mobileMenu_navigation hidden"
          }
        >
          <AiOutlineClose
            className="mobileMenu_closeMenu"
            onClick={() => setVisibleMenu(false)}
          />
          <Link to="." className="mobileMenu_link">
            <AiFillHome className="mobileMenu_link_icon" />
            <p className="mobileMenu_link_text">_home</p>
          </Link>
          <Link to="/about" className="mobileMenu_link">
            <AiOutlineSearch className="mobileMenu_link_icon" />
            <p className="mobileMenu_link_text">_about</p>
          </Link>
          <Link to="/projects" className="mobileMenu_link">
            <BsCodeSlash className="mobileMenu_link_icon" />
            <p className="mobileMenu_link_text">_projects</p>
          </Link>
          <Link to="/contact" className="mobileMenu_link">
            <AiFillContacts className="mobileMenu_link_icon" />
            <p className="mobileMenu_link_text">_contact</p>
          </Link>
        </div>
      </nav>
  );
};

export default MobileNav;
