import { FcProcess } from "react-icons/fc";
import { SiInstatus } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { FaStar } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";

const ViewDetail = () => {
    const loadedData = useLoaderData();

    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, user_email, user_name} = loadedData
    return (
        <div className="hero min-h-screen bg-base-200 my-14">
            <PageTitle title={item_name}></PageTitle>
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
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
    );
};

export default ViewDetail;