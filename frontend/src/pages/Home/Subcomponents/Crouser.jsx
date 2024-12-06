import benner from "../../../assets/banner/anime-banner.jpg"

const Crouser = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <img
                src="https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg"
                alt="first"
                className="w-full h-auto sm:h-auto md:h-auto xl:h-auto object-contain "
            />
            <img
                src="https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og"
                alt="second"
                className="w-full h-auto sm:h-auto md:h-auto xl:h-auto object-contain"
            />
            <img
                src="https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg"
                alt="third"
                className="w-full h-auto sm:h-auto md:h-auto xl:h-auto object-contain"
            />

            <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20 w-full'>
                <img src={benner} className='w-full h-full' />
            </div>
        </div>
    );
};

export default Crouser;
