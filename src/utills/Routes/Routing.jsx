import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";
import DisplayPage from "../../pages/DisplayPage";
import Checkout from "../../pages/Checkout";

import ComingSoon from "../../pages/ComingSoon";

function Routing() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />} >

                <Route index element={<Home />} />
                <Route path='/display/:productId/' element={<DisplayPage />} />
                <Route path='/checkout/:productid/:variantId' element={<Checkout />} />
                {/* <Route path='/new-arrivals' element={<NewArrival />} /> */}


            </Route>
            <Route path='*' element={<ComingSoon />} />
        </Routes>
    );
}

export default Routing;
