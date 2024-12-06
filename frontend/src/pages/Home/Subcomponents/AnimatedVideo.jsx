
import video from "../../../assets/AnimeV.webm"

function AnimatedVideo() {
    return (

        <div className="h-[500px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-10">
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