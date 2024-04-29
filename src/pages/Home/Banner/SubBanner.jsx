

import PropTypes from 'prop-types';

const SubBanner = ({props}) => {
    return (
        <div>
            <h2 className='text-2xl text-black'>{props}</h2>
        </div>
    );
};

SubBanner.propTypes = {
    props: PropTypes.node
};

export default SubBanner;