import { SectionSt, SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionSt>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionSt>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section