import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import { useState } from "react";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute font top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 md:h-auto z-10"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:py-0">
        <button className="md:hidden md:mr-0" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections"/>
          <NavLinkHeader text="Men"/>
          <NavLinkHeader text="Women"/>
          <NavLinkHeader text="About"/>
          <NavLinkHeader text="Cotact"/>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto  hidden h-[1px] w-full bg-gray-300 md:block"></span>
    </>
  );
};

export default MainHeader;
