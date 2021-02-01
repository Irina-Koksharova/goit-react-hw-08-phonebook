import PropTypes from 'prop-types';

const Section = ({ style, children }) => {
  return <section style={style}>{children}</section>;
};

Section.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
