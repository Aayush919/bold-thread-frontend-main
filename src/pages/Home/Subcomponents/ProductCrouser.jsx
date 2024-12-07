
import { useNavigate } from 'react-router-dom'
import seasonal from "../../../assets/cards/sweatshirt.png"
import clothing from "../../../assets/cards/many t shirts.png"

function ProductCrouser() {
    const navigate = useNavigate()
    return (
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-20 p-3">

            <div
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => navigate("/Tshirt")}
            >
                <div className="relative aspect-square">
                    <img
                        src="https://cdn.dribbble.com/userupload/14573009/file/original-31d1b24111ed36bda8368039d460dcba.jpg?resize=400x300&vertical=center"

                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            <div
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl "
                onClick={() => navigate("/bottom-wear")}
            >
                <div className="relative aspect-square ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6shZ9JVDI-tUgY7HhoxFfcQ6zLf1Tm-Jg&s"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>


            <div
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => navigate("/Hoodie")}
            >
                <div className="relative aspect-square">
                    <img
                        src={seasonal}


                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />


                </div>
            </div>

            <div
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => navigate("/seasonals")}
            >
                <div className="relative aspect-square">
                    <img
                        src={clothing}


                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />


                </div>
            </div>

        </div>
    )
}

export default ProductCrouser