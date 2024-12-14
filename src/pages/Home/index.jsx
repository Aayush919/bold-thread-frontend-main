import Crouser from "./Subcomponents/Crouser";
import ProductCrouser from "./Subcomponents/ProductCrouser";
import AnimatedVideo from "./Subcomponents/AnimatedVideo";
import Trending from "./Subcomponents/Trending";
import NewArrivals from "./Subcomponents/NewArrivals";
import OldProduct from "./Subcomponents/OldProduct";
import banner from '../../assets/banner/anime-banner.jpg';



const Home = () => {
    return <>
        <Crouser />
        <ProductCrouser />
        <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20'>
        <img src={banner} className='w-full h-full' />
      </div>

        <NewArrivals />
        <AnimatedVideo />
        <Trending />
        <OldProduct />

    </>

};

export default Home;
