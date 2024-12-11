import { useState } from 'react';
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function openadminpanel() {
    navigate("/login");
  };

  return (
    <div className="top-0 left-0 w-full h-100 sm:h-50 p-2">
      <nav className="flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row xl:justify-between justify-between items-start xl:gap-5 xl:mt-2 mt-2  h-20 mb-5 sm:mb-2">

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden m-5" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoIosClose className="text-4xl absolute top-5 left-0 z-50" />
            ) : (
              <IoIosMenu className="text-4xl  absolute top-5 left-2 z-50" />
            )}
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="logo cursor-pointer w-[15vw] sm:w-[15vw] md:w-[8vw] lg:w-[8vw] xl:w-[7vw] mt-1"
          />


          {/* Mobile Menu and Links */}
          <div
            className={`fixed top-0 left-0 w-full xl:h-0 h-96 py-3
              lg:static lg:h-auto lg:bg-transparent h-full
              mt-5
              ${isMenuOpen ? 'translate-x-0 bg-white' : '-translate-x-full lg:translate-x-0'}
              flex items-center justify-center z-40 lg:z-auto`}
          >
            <div className={`flex flex-col lg:flex-row gap-7 text-base sm:text-lg ${isMenuOpen ? 'translate-x-0 mt-10' : '-translate-x-full lg:translate-x-0'}`}>
              {/* <Link to="/profile" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} md-none>Profile</Link> */}
              <Link to="/profile"
                className="hover:text-blue-500 md:hidden"
                onClick={() => setIsMenuOpen(false)}>
                Profile
              </Link>

              <Link to="/" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/new-arrivals" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
              <Link to="/trending" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Trending</Link>
              <Link to="/Customized" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Customized</Link>
              <Link to="/upper-wear" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Upper Wear</Link>
              <Link to="/bottom-wear" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}> Bottom Wear</Link>
              <Link to="/store" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}> Store</Link>
            
              {/* Add more links here as needed */}
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
              className="text-gray-600 hover:text-blue-500 cursor-pointer mt-5"
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
