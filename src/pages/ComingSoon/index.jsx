
import { useNavigate, useLocation } from "react-router-dom";

const ComingSoon = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Dynamic content from previous route
    const data = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    {data.type === "store"
                        ? "Store Availability"
                        : "Product Availability"}
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    {data.type === "store"
                        ? "Our store will be available starting January."
                        : "This product will be available starting January."}
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;
