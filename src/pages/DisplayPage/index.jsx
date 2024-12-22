import { useEffect } from "react";
import ProductSlider from "./Subcomponents/ProductSlider"



const DisplayPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);



  return (
    <div>


      <ProductSlider />
    </div>
  )
}

export default DisplayPage