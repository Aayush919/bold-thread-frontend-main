import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import png from "../../../assets/npg tshirt.png"
import axios from 'axios'


function LatestColletion() {

    const [products, setProducts] = useState([])
    // const [open, setOpen] = useState(8)


    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
            // setLoading(true);
            try {
                // Tumhare backend ke API endpoint ko call karo
                const response = await axios.get(`http://localhost:3000/api/v1/product/category/upperwear`);
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





    return (
        <div>
            <h1 className='font-semibold text-4xl text-center mt-5'>Latest Collection</h1>

            <div
                className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
            >




                {products && products.length > 0 && products.map((category, index) => (
                    <div
                        // onClick={() => hendlepage(category.id)}
                        key={index}
                        className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-80 bg-gray-100 hover:bg-gray-300 pb-10 cursor-pointer m-10'
                    >
                        <div className="xl:h-72 line-clamp-2">
                            <img src={`http://localhost:3000/api/document/variants[0][images][0]-1733335484260-405570686.jpg`} alt='/Images/watch.png' loading="lazy" />


                        </div>


                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-1 mb-2">{category.name || 'Tshirt'}</h3>
                            <p className="mt-2">price ${category.price}</p>
                        </div>


                    </div>
                ))}

            </div>

            <button onClick={() => navigate('/new-arrivals')} className='border-2 border-black  mt-10 ml-36  xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>

        </div>
    )
}

export default LatestColletion