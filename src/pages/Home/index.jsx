import Crouser from "./Subcomponents/Crouser";
import ProductCrouser from "./Subcomponents/ProductCrouser";
import AnimatedVideo from "./Subcomponents/AnimatedVideo";
import Trending from "./Subcomponents/Trending";
import NewArrivals from "./Subcomponents/NewArrivals";
import OldProduct from "./Subcomponents/OldProduct";
import b1 from '../../assets/banner/banner1.png'
import b2 from '../../assets/banner/banner2.png'
import b3 from '../../assets/banner/banner3.png'

const images = [b1, b2, b3]


const Home = () => {
    return <>
        <Crouser />
        <ProductCrouser />
        <NewArrivals />
        <AnimatedVideo />
        <Trending />
        <OldProduct />

    </>

};

export default Home;
