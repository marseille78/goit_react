import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

const PageTitle = ({ title }) => {
    return (
        <Title data-cmp="PageTitle">{title}</Title>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;