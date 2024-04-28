
import PropTypes from 'prop-types';
import { BiSolidCustomize } from 'react-icons/bi';
import { FcProcess } from 'react-icons/fc';
import { SiInstatus } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({ artAndCraft, setArtAndCrafts, artAndCrafts }) => {
    const { image, item_name,customization, price, processing_time, stock_status, _id } = artAndCraft;

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-server-side.vercel.app/arts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = artAndCrafts.filter(art => art._id !== _id)
                            setArtAndCrafts(remaining);
                        }
                       
                    })
                
            }
            return;
        });

       

    }
    return (
        <div className="card card-compact w-80 bg-base-100 border-l-2 border-r-2 border-b-2 border-[#f17941]  rounded-lg shadow-[#f17941] shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#f17941]">{item_name}</h2>
                <p className='flex items-center gap-2 text-xl mb-3'><span className='text-[#f17941] font-bold text-xl'>< BiSolidCustomize className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Customization</span>:{customization}</p>
                <p className='text-xl'><span className='text-[#f17941]'><span className='text-[#f17941] font-bold text-xl'>$</span> price</span>:{price}</p>
                <p className='flex items-center gap-2 text-xl'><span className='text-[#f17941] font-bold text-xl'><FcProcess className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Processing Time</span>:{processing_time}</p>
                <p className='flex items-center gap-2 text-xl'><span className='text-[#f17941] font-bold text-xl'><SiInstatus className='text-[#f17941]' /></span> <span className='text-[#f17941]'>Stock Status</span>:{stock_status}</p>
                <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}><button className="btn bg-[#f17941] text-white">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#f17941] text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyCard.propTypes = {
    artAndCraft: PropTypes.object,
    artAndCrafts: PropTypes.array,
    setArtAndCrafts: PropTypes.func
};

export default MyCard;