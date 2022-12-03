import { useContext, useState } from "react";

import { useCartDetails } from "@/context/useCartDetails";

import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CarDetailsHeader from "@/components/header/CartDetailsHeader";

const MainHeader = () => {
  const { totalQuantityProducts } = useContext(useCartDetails);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-4 md:py-0">
        <button className="md:mr-0 md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        {/* <nav className={navClass}> */}
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8"
              : "hidden"
          }`}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Cotact" />
        </nav>
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)}
            className="relative">
            <CartIcon />
            <span className="absolute top-0 right-0 translate-x-1 rounded-full bg-orange-primary px-2 text-xs font-bold text-white">
              {totalQuantityProducts}
            </span>
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
          {isOpenDetailsCart && <CarDetailsHeader />}
        </div>
      </header>
      <span className="container mx-auto  hidden h-[1px] w-full bg-gray-300 md:block"></span>
    </>
  );
};

export default MainHeader;
