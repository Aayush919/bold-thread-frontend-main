import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import png from "../../../assets/npg tshirt.png"

function Arrivals() {
    const [products, setProducts] = useState([])
    // const [open, setOpen] = useState(8)


    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
            // setLoading(true);
            try {
                // Tumhare backend ke API endpoint ko call karo
                const response = await axios.get(`http://localhost:3000/api/v1/product/tags/Trending`);
                console.log(response.data.data.data[0].variants[0].images[0], 'ye h bro.')
                setProducts(response && response.data.data.data)
                // setProducts(response.data.data); // Response mein data access karo
            } catch (err) {
                console.log(err)
                // setError(err.message || "Error fetching products.");
            }
            // finally {
            //     // setLoading(false);
            // }
        };

        fetchProducts();
    }, []);

    products.length > 0 && products.map((item) => {
        console.log(item.variants[0].images[0])
    })

    return (
        <div>
            <h1 className='font-semibold text-4xl text-center mt-20'>Trending</h1>

            <div
                className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
            >



                {products.length > 0 && products.map((category, index) => (
                    <div
                        key={index}
                        //   onClick={() => hendlepage(category.id)}
                        className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-72 bg-gray-100 hover:bg-gray-300 cursor-pointer'
                    >
                        <div className="xl:h-72 ">
                            {/* <img
                                src={png}
                                alt={category.title || 'Product image'} // Added fallback alt text
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            /> */}
                            <img src={`http://localhost:3000/api/document/variants[0][images][0]-1733335484260-405570686.jpg`} alt='/Images/watch.png' loading="lazy" />
                        </div>

                        {/* Display title below the image */}
                        <div className="p-4">
                            <h3 className="text-sm font-semibold line-clamp-2">{category.title}</h3>
                            <p className="mt-2">${category.price}</p>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        </div>
                    </div>
                ))}

            </div>



            <button onClick={() => navigate('/new-arrivals')} className='border-2 border-black  mt-2 ml-32 xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>

        </div>
    )
}

export default Arrivals