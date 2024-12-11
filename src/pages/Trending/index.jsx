import Crouser from "../Home/Subcomponents/Crouser"
import Categories from "./Subcomponents/Categories"
import PopularProducts from "./Subcomponents/PopularProducts"


function Trending() {
  return (
    <div>
        <Crouser/>
        <Categories/>
        <PopularProducts/>
    </div>
  )
}

export default Trending