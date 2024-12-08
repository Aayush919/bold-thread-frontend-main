import { useNavigate } from "react-router-dom";


const ComingSoon = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Coming Soon 🚀
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    We’re working hard to bring something amazing for you. Stay tuned!
                </p>







                {/* Content */}
                <div className="z-10 text-center p-4">

                    <p className="text-xl md:text-2xl mb-8">
                        Get ready for our biggest sale of the year starting
                        <span className="text-yellow-400 font-bold"> 25th December</span>!
                    </p>
                    <p className="text-lg mb-8">
                        Enjoy massive discounts and exclusive offers. Don’t miss out!
                    </p>
                </div>


                {/* Notify Me Button */}
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium" onClick={() => navigate('/')}>
                    Back To Home
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;
