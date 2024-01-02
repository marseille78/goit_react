import PropTypes from "prop-types";
import { Title } from "./PageTitle.styled";

function PageTitle({ text }) {
  return <Title>{text}</Title>;
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
