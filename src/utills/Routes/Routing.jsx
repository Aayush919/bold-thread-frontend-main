import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";
import DisplayPage from "../../pages/DisplayPage";
import Checkout from "../../pages/Checkout";

import ComingSoon from "../../pages/ComingSoon";
import NewArrival from "../../pages/NewArrival";
import Trending from "../../pages/Trending";
import UpperWear from "../../pages/UpperWear";
// import BottomWear from "../../pages/BottomWear";

import Customized from "../../pages/Customized";
import SignUp from "../../commoncomponents/SignUp";
import PrivacyPolicy from "../../pages/Policies/PrivacyPolicy";
import TermsAndConditions from "../../pages/Policies/TermsAndConditions";
import CancelPolicy from "../../pages/Policies/CancelPolicy";
import Login from "../../commoncomponents/Login";

// import Customized from "../../pages/Customized";

function Routing() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />} >

                <Route index element={<Home />} />
                <Route path='/display/:productId/:variantId' element={<DisplayPage />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/new-arrivals' element={<NewArrival />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/upper-wear' element={<UpperWear />} />
                {/* <Route path='/bottom-wear' element={<BottomWear />} /> */}

                <Route path='/customized' element={<Customized />} />
                <Route path='/terms' element={<TermsAndConditions />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/return-cancellation' element={<CancelPolicy />} />
                <Route path='/status/:txnId' element={<Customized />} />





            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/info' element={<ComingSoon />} />
        </Routes>
    );
}

export default Routing;
