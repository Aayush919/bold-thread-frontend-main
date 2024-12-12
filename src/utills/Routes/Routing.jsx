import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";
import DisplayPage from "../../pages/DisplayPage";
// import Checkout from "../../pages/Checkout";

import ComingSoon from "../../pages/ComingSoon";
import NewArrival from "../../pages/NewArrival";
import Trending from "../../pages/Trending";
import UpperWear from "../../pages/UpperWear";
// import BottomWear from "../../pages/BottomWear";
import UserProfile from "../../pages/UserProfile";
// import Customized from "../../pages/Customized";

function Routing() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />} >

                <Route index element={<Home />} />
                <Route path='/display/:productId/:variantId' element={<DisplayPage/>} />
                {/* <Route path='/checkout/:productid/:variantId' element={<Checkout />} /> */}
                <Route path='/new-arrivals' element={<NewArrival />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/upper-wear' element={<UpperWear />} />
                {/* <Route path='/bottom-wear' element={<BottomWear />} /> */}
                <Route path='/user-profile' element={<UserProfile />} />
                {/* <Route path='/customized' element={<Customized />} /> */}



            </Route>
            <Route path='*' element={<ComingSoon />} />
        </Routes>
    );
}

export default Routing;
