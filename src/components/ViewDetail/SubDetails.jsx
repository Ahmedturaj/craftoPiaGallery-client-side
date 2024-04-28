import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { Typewriter } from "react-simple-typewriter";


const SubDetails = () => {
    const loadedData = useLoaderData()
    const title = loadedData.item_name;
    const { image, item_name, subcategory_name, short_description, price, rating, processing_time} = loadedData
    return (
        <div className="mt-24 bg-base-200">
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] md:w-96  mx-auto mb-5"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-center font-bold">Details of:<span className="text-[#f17941]"><Typewriter
                        words={[`${title}`]}
                        loop={0}
                    /></span></h2>
                </Fade>
            </div>
            <div className="hero min-h-screen bg-base-200 my-14">
                <PageTitle title={`${title} detail`}></PageTitle>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm w-10/12 md:w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-3 text-[#f17941]">{item_name}</h1>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'>Subcategory:</span>{subcategory_name}</p>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'><span className='text-[#f17941] font-bold text-xl'>$</span> price</span>:{price}</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'><FcProcess className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Processing Time</span>:{processing_time}</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'><FaStar className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Rating</span>:{rating} star</p>
                        <p className='text-xl'>{short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubDetails;