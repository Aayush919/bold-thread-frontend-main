import { useEffect } from "react";
import Crouser from "../Home/Subcomponents/Crouser"
import Categories from "./Subcomponents/Categories"
import PopularProducts from "./Subcomponents/PopularProducts"


function Trending() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);
  return (
    <div>
      <Crouser />
      <Categories />
      <PopularProducts />
    </div>
  )
}

export default Trending