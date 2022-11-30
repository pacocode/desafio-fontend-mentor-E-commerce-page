import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

const MainImages = ({ ARRAY_IMGS, ARRAY_IMG_SAMLL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (window.innerWidth > 767) return setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SAMLL={ARRAY_IMG_SAMLL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SAMLL={ARRAY_IMG_SAMLL}
            isOpenModal={isOpenModal}
            className="hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
            handleCloseModal={handleCloseModal}
          />
          <span
            className="fixed top-0 left-0 h-full w-full bg-black/70"
            onClick={handleCloseModal}></span>
        </>
      )}
    </>
  );
};

export default MainImages;
