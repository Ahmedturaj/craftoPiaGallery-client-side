import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>CraftopiaGallery ~ {title}</title>
            </Helmet>
        </HelmetProvider>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string
};

export default PageTitle;