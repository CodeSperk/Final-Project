import PropTypes from 'prop-types';
const CardButton = ({text}) => {
  return (
    <button className="capitalize mt-6 py-2 md:py-3 px-6 md:px-7 bg-[#E8E8E8] hover:bg-[#111827] rounded-lg border-b-2 md:border-b-4 border-[var(--clr-accent)] hover:border-transparent text-[var(--clr-accent)] font-medium text-lg w-full">
      {text}
    </button>
  );
};

CardButton.propTypes={
  text: PropTypes.node
}

export default CardButton;