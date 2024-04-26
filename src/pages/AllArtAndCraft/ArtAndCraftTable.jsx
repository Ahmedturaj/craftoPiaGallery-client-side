import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtAndCraftTable = ({ artAndCraft }) => {
    const { image, item_name, subcategory_name,  price, stock_status,  user_name,_id } = artAndCraft;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item_name}</div>
                        <div className="text-sm opacity-50">{user_name}</div>
                    </div>
                </div>
            </td>
            <td>
              {subcategory_name}
                <br />
                <span className="badge badge-ghost badge-sm">{stock_status}</span>
            </td>
            <td>{price}</td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn bg-[#f17941] text-white text-xs">View details</button></Link>
            </th>
        </tr>
    );
};

ArtAndCraftTable.propTypes = {
    artAndCraft: PropTypes.object
};

export default ArtAndCraftTable;
