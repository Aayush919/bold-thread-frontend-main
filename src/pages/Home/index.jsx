import Crouser from "./Subcomponents/Crouser";
import ProductCrouser from "./Subcomponents/ProductCrouser";
import AnimatedVideo from "./Subcomponents/AnimatedVideo";
import Trending from "./Subcomponents/Trending";
import NewArrivals from "./Subcomponents/NewArrivals";
import OldProduct from "./Subcomponents/OldProduct";
import banner from '../../assets/banner/anime-banner.jpg';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);
  const navigate = useNavigate();
  return <>
    <Crouser />
    {/* <ProductCrouser /> */}
    <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20'>
      <img src={banner} className='w-full h-full' onClick={() => navigate('/Customized')} />
    </div>

    <NewArrivals />
    <AnimatedVideo />
    <Trending />
    {/* <OldProduct /> */}





  </>

};

export default Home;
