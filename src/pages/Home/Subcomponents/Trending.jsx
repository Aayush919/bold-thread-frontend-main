import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios'
import { urls } from "../../../config/urls";

function Trending() {

    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${urls}/product/tags/Trending`);
                setProducts(response.data.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1 className='font-semibold text-4xl text-center mt-5'>Trending</h1>
            <div
                className="mb-16 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 px-2"
            >
                {products && products.length > 0 && products.map((category, index) => (
                    <div key={index} className='cursor-pointer flex-shrink-0 snap-center w-full max-w-sm mx-auto rounded-md overflow-hidden h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[60vh] bg-white shadow-md'>
                        <img src={`${urls}/document/variants[0][images][0]-1733507307529-141666883.jpg`} alt="" className='w-full h-52 object-cover' />
                        <div className='flex justify-between items-center px-3 mt-3'>
                            <h2 className='font-semibold text-lg truncate max-w-[75%]'>{category.name}</h2>
                            <h2 className='border-2 px-3 p-1 rounded-md border-black flex items-center justify-center '>
                                < FaRupeeSign className="h-3" />
                                {category.price}</h2>
                        </div>
                        <p className='text-xs px-3 mt-2 text-gray-600 truncate max-w-[75%]'>{category.description}</p>
                        <button className='text-white ml-3 text-xs rounded-md p-2 mt-4 bg-black' onClick={() => navigate(`/display/${category._id}`)}>
                            Order Now
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex justify-center'>
                <button className='border-2 border-black mt-10 rounded-md font-semibold p-2 px-5'>View More</button>
            </div>
        </div >
    );
}

export default Trending;
