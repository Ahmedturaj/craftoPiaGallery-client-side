import { FcProcess } from "react-icons/fc";
import { SiInstatus } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { FaStar } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const ViewDetail = () => {
    const loadedData = useLoaderData();

    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, user_email, user_name } = loadedData
    return (
        <div className="">
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] md:w-96  mx-auto mb-5"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-center font-bold">Details of:<span className="text-[#f17941]"><Typewriter
                        words={[`${item_name}`]}
                        loop={0}
                    /></span></h2>
                </Fade>
            </div>
            <div className="hero min-h-screen bg-base-200 my-14">
                <PageTitle title={item_name}></PageTitle>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm w-10/12 md:w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-3 text-[#f17941]">{item_name}</h1>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'>Author name:</span>{user_name}</p>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'>Author email:</span>{user_email}</p>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'>Subcategory:</span>{subcategory_name}</p>
                        <p className='text-xl mb-3'><span className='text-[#f17941]'><span className='text-[#f17941] font-bold text-xl'>$</span> price</span>:{price}</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'><FcProcess className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Processing Time</span>:{processing_time} hr</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'><SiInstatus className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Stock Status</span>:{stock_status}</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'><FaStar className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Rating</span>:{rating} star</p>
                        <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'>< BiSolidCustomize className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Customization</span>:{customization}</p>
                        <p className='text-xl'>{short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;