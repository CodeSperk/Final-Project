import PropTypes from 'prop-types';

const SectionHeader = ({heading, subHeading}) => {
  return (
    <div className="title-container max-w-md mx-auto text-center">
      <small className="text-[var(--clr-accent)] text-[1.1rem]">--- {subHeading} ---</small>
      <h2 className="uppercase border-y-4 py-5 mt-4 mb-8 md:mb-12">{heading}</h2>
    </div>
  );
};

SectionHeader.propTypes={
  heading:PropTypes.node,
  subHeading:PropTypes.node,
}

export default SectionHeader;