import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white pr-3 mt-4">
      <div className="container mx-auto px-4 py-8 md:py-10">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold">Products</h3>
            <ul className="text-sm space-y-2 mt-5">
              <li><Link to="/new-arrivals" className="hover:text-gray-300 transition-colors">New Arrival</Link></li>
              <li><Link to="/seasonals" className="hover:text-gray-300 transition-colors">Seasonals</Link></li>
              <li><Link to="/trending" className="hover:text-gray-300 transition-colors">Trending</Link></li>
              <li><Link to="/upper-wear" className="hover:text-gray-300 transition-colors">Upper Wear</Link></li>
              <li><Link to="/bottom-wear" className="hover:text-gray-300 transition-colors">Bottom Wear</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="#" className="hover:text-gray-300 transition-colors">History</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition-colors">Philosophy</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition-colors">Store</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">boltthreads@gmail.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm mb-4">India</p>
            <div className="flex gap-3">
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <IoLogoFacebook className="text-2xl" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <IoLogoLinkedin className="text-2xl" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <FaSquareTwitter className="text-2xl" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Policy</h3>
            <p className="text-sm cursor-pointer my-2" onClick={() => navigate('/privacypolicy')}>Privacy Policy</p>
            <p className="text-sm cursor-pointer my-2" onClick={() => navigate('/terms')}>Terms & Conditions</p>
            <p className="text-sm cursor-pointer my-2" onClick={() => navigate('/return-cancellation')}>Cancellation and Returns</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
