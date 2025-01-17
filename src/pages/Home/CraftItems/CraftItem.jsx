
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { FcProcess } from "react-icons/fc";
import { SiInstatus } from "react-icons/si";
import { Link } from 'react-router-dom';
const CraftItem = ({ craftsItem }) => {
    const { image, item_name, subcategory_name, price, processing_time, stock_status, _id } = craftsItem;
    return (
        <Fade cascade damping={0.5}>
            <div className="card card-compact w-full md:w-80 md:h-[500px] bg-base-100 border-l-2 border-r-2 border-b-2 border-[#f17941]  rounded-lg shadow-[#f17941] shadow-md">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#f17941]">{item_name}</h2>
                    <p className='text-xl'><span className='text-[#f17941]'>Subcategory:</span>{subcategory_name}</p>
                    <p className='text-xl'><span className='text-[#f17941]'><span className='text-[#f17941] font-bold text-xl'>$</span> price</span>:{price}</p>
                    <p className='flex items-center gap-2 text-xl'><span className='text-[#f17941] font-bold text-xl'><FcProcess className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Processing Time</span>:{processing_time}</p>
                    <p className='flex items-center gap-2 text-xl'><span className='text-[#f17941] font-bold text-xl'><SiInstatus className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Stock Status</span>:{stock_status}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn bg-[#f17941] text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

CraftItem.propTypes = {
    craftsItem: PropTypes.object
};

export default CraftItem;