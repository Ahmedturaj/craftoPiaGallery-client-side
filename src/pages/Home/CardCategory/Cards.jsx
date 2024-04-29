
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { FcProcess } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Cards = ({ category }) => {
    return (
        <Link to={`/subcategory/${category.subcategory_name}`}>
            <Fade cascade damping={0.5}>
                <div className="card card-compact w-full md:w-80 h-[500px] bg-base-100 border-l-2 border-r-2 border-b-2 border-[#f17941]  rounded-lg shadow-[#f17941] shadow-md">
                    <figure><img src={category.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#f17941]">{category.item_name}</h2>
                        <p className='text-xl'><span className='text-[#f17941]'>Subcategory:</span>{category.subcategory_name}</p>
                        <p className='text-xl'><span className='text-[#f17941]'><span className='text-[#f17941] font-bold text-xl'>$</span> price</span>:{category.price}</p>
                        <p className='flex items-center gap-2 text-xl'><span className='text-[#f17941] font-bold text-xl'><FcProcess className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Processing Time</span>:{category.processing_time}</p>
                    </div>
                </div>
            </Fade></Link>
    );
};

Cards.propTypes = {
    category: PropTypes.object
};

export default Cards;