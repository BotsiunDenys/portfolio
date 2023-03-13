import { Outlet } from "react-router-dom";
import StandartNav from "./StandartNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <>
      <div>
        <StandartNav />
        <MobileNav />
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
