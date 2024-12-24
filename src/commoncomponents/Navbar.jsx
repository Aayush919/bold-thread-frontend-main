import { useEffect, useState } from 'react';
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo/logo.png";
import { useDispatch } from 'react-redux';
import { profilePopup } from '../redux/Slices/PopupSlice';
import { useAuth } from '../AuthProvider/AuthProvider';


export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function openadminpanel() {
    setIsMenuOpen(false);

    dispatch(profilePopup())

  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="top-0 left-0 w-full h-100 sm:h-50 p-3">
      <nav className="flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row xl:justify-between justify-between items-start xl:gap-5 xl:mt-2 mt-2  h-20 mb-5 sm:mb-2">

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden m-5" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoIosClose className="text-5xl absolute top-7 left-1 z-50 text-white" />
            ) : (
              <IoIosMenu className="text-4xl  absolute top-7 left-1 z-50" />
            )}
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="logo cursor-pointer w-[15vw] sm:w-[15vw] md:w-[8vw] lg:w-[8vw] xl:w-[7vw] mt-4 sm:mt-0"
          />


          {/* Mobile Menu and Links */}
          <div
            className={`fixed top-0 left-0 w-full xl:h-0 h-96 py-3
              lg:static lg:h-auto lg:bg-transparent h-full
              mt-5
              ${isMenuOpen ? 'translate-x-0 bg-black bg-opacity-70' : '-translate-x-full lg:translate-x-0'}
              flex items-center justify-center z-40 lg:z-auto`}
          >
            <div className={`flex flex-col lg:flex-row gap-7 text-base sm:text-lg ${isMenuOpen ? 'translate-x-0 mt-10' : '-translate-x-full lg:translate-x-0'}`}>
              {/* <Link to="/profile" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} md-none>Profile</Link> */}
              <p
                className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white ' : 'text-black hidden'}`}
                onClick={() => openadminpanel()}>
                Profile
              </p>

              <Link to="/" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/new-arrivals" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
              <Link to="/trending" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Trending</Link>
              <Link to="/Customized" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Customized</Link>
              {/* <Link to="/upper-wear" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Upper Wear</Link> */}
              <p
                className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white ' : 'text-black hidden'}`}
                onClick={() => navigate('/signup')} >
                Sign Up
              </p>
              <p
                className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white ' : 'text-black hidden'}`}
                onClick={() => navigate('/login')}>
                Log In
              </p>
              {/* <Link to="/bottom-wear" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}> Bottom Wear</Link>
              <Link to="/store" className={`hover:text-blue-500 text-lg ${isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}> Store</Link> */}

              {/* Add more lninks here as needed */}
            </div>
          </div>

          {/* Icons (Cart, Profile, Search) */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {/* Search Icon */}
            <div className="relative transition-all duration-500 ease-in-out max-w-xs opacity-100">
              <IoIosSearch className="absolute right-2 top-1/2 text-xl" />
            </div>

            {/* Cart Icon */}

            {/* <span className='text-sm'>0</span> */}
            <BsCart2
              className="text-gray-600 hover:text-blue-500 cursor-pointer mt-5 mr-2"
              size={25}
              onClick={() => navigate('/cart')}
            />


            {/* Profile Icon (Hidden on mobile) */}
            <BsPerson
              onClick={() => openadminpanel()}
              className="text-gray-600 hover:text-blue-500 cursor-pointer mt-4 hidden sm:block"
              size={25}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
