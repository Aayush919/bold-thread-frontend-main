import Crouser from "./Subcomponents/Crouser";
import ProductCrouser from "./Subcomponents/ProductCrouser";
import AnimatedVideo from "./Subcomponents/AnimatedVideo";
import Trending from "./Subcomponents/Trending";
import NewArrivals from "./Subcomponents/NewArrivals";



const Home = () => {
    return <>
        <Crouser />
        <ProductCrouser />
        <NewArrivals />
        <AnimatedVideo />
        <Trending />

    </>

};

export default Home;
