
import video from "../../../assets/productshoot.mp4"

function AnimatedVideo() {
    return (

        <div className="h-[500px] sm:h-[300px] md:h-[600px] lg:h-[700px] mt-10">
            <video
                src={video}
                loop
                muted
                autoPlay
                className="w-full h-full object-cover">
            </video>
        </div>

    )
}

export default AnimatedVideo