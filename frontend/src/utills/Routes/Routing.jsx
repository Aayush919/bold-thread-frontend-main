import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";

function Routing() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />} >

                <Route index element={<Home />} />


            </Route>
        </Routes>
    );
}

export default Routing;
