import Routing from "./utills/Routes/Routing"
import './index.css'
import { AuthProvider } from "./AuthProvider/AuthProvider"
import {  useSelector } from "react-redux";
import OrderPopup from "./commoncomponents/OrderPopup";
import { useEffect } from "react";





const App = () => {
  const isOpen = useSelector((state) => state.popupReducer.isPopupOpen);

console.log(isOpen)
  useEffect(()=>{
  console.log('changes made')
  },[isOpen])
  return (
    <div>

<AuthProvider>

      <Routing />
     {isOpen&& <OrderPopup/>}
    </AuthProvider>

    </div>
  )
}

export default App