import { useEffect, } from "react";
import { profilePopup } from "../../redux/Slices/PopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/Api/Auth";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth()
  const isProfileOpen = useSelector((state) => state.popupReducer.isProfileOpen);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate()


  const toggleProfile = () => {
    console.log("Dispatching profilePopup...");
    dispatch(profilePopup());
  };

  useEffect(() => {
    console.log(user, 'user is here bro')
  }, [user]);

  // const [user, setUser] = useState({
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phone: "(123) 456-7890",
  //   address: "123 Main St, Anytown, USA 12345",
  // });




  const handleLogout = async () => {
    try {
      await logout().unwrap();
      console.log("Logged out successfully");
      dispatch(profilePopup())
      // Perform any additional actions like redirecting to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {/* Drawer */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          < div
            className="fixed inset-0 bg-black bg-opacity-60"
            onClick={toggleProfile}
          ></div >

          {/* Drawer Content */}
          < div className="w-96 bg-gray-800 text-white shadow-lg overflow-hidden relative" >
            {/* Close Icon */}
            < button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={toggleProfile}
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button >

            <div className="p-4 border-b">
              <h3 className="text-lg font-bold">User Profile</h3>
            </div>

            {user ? <><div className="p-4 space-y-4">
              {/* Form */}
              <div>
                <label className="block text-sm font-medium">username</label>
                <p className="mt-1">{user?.username}</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Email Address</label>
                <p className="mt-1">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <p className="mt-1">{user.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <p className="mt-1">{user.address}</p>
              </div>

            </div>

              <div className="p-4 border-t flex justify-end">

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-150"
                >
                  Log out
                </button>
              </div>

            </> :

              <>
                <div>

                  <p className="m-1 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</p>
                  <p className="m-1 cursor-pointer" onClick={() => navigate('/login')}>Log In</p>
                </div>
              </>}




          </div >

        </div >

      )}
    </>
  );
};

export default UserProfile;
