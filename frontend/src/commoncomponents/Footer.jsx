






import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white pr-3">
      <div className="container mx-auto px-4ts py-8 md:py-10">

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold">Products</h3>
            <ul className="text-sm space-y-2 mt-5">
              <li><a href="/new-arrivals" className="hover:text-gray-300 transition-colors">New Arrival</a></li>
              <li><a href="/seasonals" className="hover:text-gray-300 transition-colors">Seasonals</a></li>
              <li><a href="/trending" className="hover:text-gray-300 transition-colors">Trending</a></li>
              <li><a href="/upper-wear" className="hover:text-gray-300 transition-colors">Upper Wear</a></li>
              <li><a href="/bottom-wear" className="hover:text-gray-300 transition-colors">Bottom Wear</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">History</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Store</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">boltthreads@gmail.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm mb-4">India</p>
            <div className="flex gap-2">
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><IoLogoFacebook className="text-2xl" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><IoLogoLinkedin className="text-2xl" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaSquareTwitter className="text-2xl" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaInstagram className="text-2xl" /></a>
            </div>
          </div>

          {/* <div >
            <h1 className="text-3xl">Get In Touch</h1>
            <h1 className="text-3xl font-semibold mt-5">Join Our Newsletter</h1>
            <form className="flex flex-col md:flex-row gap-5 mt-5">
              <input type="email" placeholder="Your Email" className="w-full md:w-auto border-2 border-white py-2 px-7 rounded-md bg-transparent" />
              <button className="bg-white text-black rounded-full py-2 px-7">Subscribe</button>
            </form>
          </div> */}

          <div>
            <h3 className="text-xl font-bold mb-4">Our Policy</h3>


            <p className='text-sm cursor-pointer my-2' onClick={() => navigate('/privacypolicy')}>      Privacy Policy</p>
            <p className='text-sm cursor-pointer my-2' onClick={() => navigate('/terms')}> Terms & Conditions</p>
            <p className='text-sm cursor-pointer my-2' onClick={() => navigate('/return-cancellation')}>    Cancellation and Returns</p>


          </div>

        </div>
      </div>
    </footer>
  )
}