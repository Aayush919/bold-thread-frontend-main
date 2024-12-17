import { useDispatch } from "react-redux";
import { togglePopup } from "../redux/Slices/PopupSlice";
import { useNavigate } from "react-router-dom";


const OrderPopup = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

const navigationHandler=()=>{
    dispatch(togglePopup())
    navigate('/signup')
}
  return (
    <div className="flex items-center justify-center h-screen">
    

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
               onClick={()=>dispatch(togglePopup())}
              className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
            >
              ✕
            </button>

            {/* Popup Content */}
            <h2 className="text-xl font-bold mb-4">Log In or Register</h2>
            <p className="text-gray-600 mb-4">
              You need to log in or register to place your order.
            </p>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Log In
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={navigationHandler}>
                Register
              </button>
            </div>
          </div>
        </div>
 
    </div>
  );
};

export default OrderPopup;
