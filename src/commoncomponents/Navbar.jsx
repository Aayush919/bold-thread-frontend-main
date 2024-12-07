


import { useState } from 'react';
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo/logo.png"

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
    <div className="top-0 left-0  w-full xl:px-4 h-100 sm:h-50">


      <nav className="flex flex-col justify-between items-center xl:ml-0 ml-[-30px]">

        <div className="w-full flex lg:flex-row xl:justify-between justify-between items-start xl:gap-5 xl:mt-2 mt-2 p-5 h-20 mb-5 sm:mb-2">
          <button
            className="lg:hidden m-5"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoIosClose className="text-4xl absolute top-5 left-5 z-50" />
            ) : (
              <IoIosMenu className="text-4xl" />
            )}
          </button>


          <img
            src={logo}
            alt="logo"
            className="logo w-20 cursor-pointer sm:w-15 ml-5 sm:ml-3"
          />

          <div
            className={`
                  fixed top-0 left-0 w-full xl:h-0  h-96  py-3
                  lg:static lg:h-auto lg:bg-transparent h-full
                  mt-5
                  ${isMenuOpen ? 'translate-x-0 bg-white' : '-translate-x-full lg:translate-x-0 '}
                  flex items-center justify-center
                  z-40 lg:z-auto
                `}
          >
            <div className={`flex flex-col lg:flex-row gap-7 text-base sm:text-lg  ${isMenuOpen ? 'translate-x-0  mt-10 ' : '-translate-x-full lg:translate-x-0'}`}>

              <Link to="/" className="hover:text-blue-500 " onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/new-arrivals" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} >New Arrivals</Link>
              <Link to="/trending" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} >Trending</Link>
              <Link to="/customized" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} >Customized</Link>
              <Link to="/upper-wear" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)} >Upper Wear</Link>
              <Link to="/bottom-wear" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Bottom Wear</Link>
              <Link to="/seasonals" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Seasonals</Link>

            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className={`relative    transition-all duration-500 ease-in-out  'max-w-xs opacity-100' }`}>
              {/* <TextField
                className="xl:w-full "
                label="Search by product.."
                variant="standard"
              /> */}
              <IoIosSearch className="absolute right-2 top-1/2 text-xl" />
            </div>
            <div>
              <span className='text-sm  ml-3'>0</span>
              <BsCart2
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
                size={25}
                onClick={() => navigate('/cart')}
              />
            </div>
            <BsPerson
              onClick={() => openadminpanel()}
              className="text-gray-600 hover:text-blue-500 cursor-pointer mt-4"
              size={25}
            />


          </div>
        </div>

      </nav>
    </div>
  );
}