import Crouser from "./Subcomponents/Crouser";
import ProductCrouser from "./Subcomponents/ProductCrouser";
import AnimatedVideo from "./Subcomponents/AnimatedVideo";
import Trending from "./Subcomponents/Trending";
import NewArrivals from "./Subcomponents/NewArrivals";
import OldProduct from "./Subcomponents/OldProduct";



const Home = () => {
    return <>
        <Crouser />
        <ProductCrouser />
        <NewArrivals />
        <AnimatedVideo />
        <Trending />
        <OldProduct/>

    </>

};

export default Home;
