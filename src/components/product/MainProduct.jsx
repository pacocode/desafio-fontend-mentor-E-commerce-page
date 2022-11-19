import DetailsProduct from "@/components/product/DetailsProduct";
import SlideProduct from "@/components/product/SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2">
        <SlideProduct />
        <DetailsProduct />
      </main>
    )
}

export default MainProduct;