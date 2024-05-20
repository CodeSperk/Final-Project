import PropTypes from 'prop-types';

const MenuButton = ({text}) => {
  return (
    <div className="text-center">
      <button className="capitalize mt-6 md:mt-8 py-3 md:py-4 px-6 md:px-7 rounded-lg border-b-2 md:border-b-4 hover:border-2 border-black text-[var(--clr-heading)] font-medium text-lg">
        {text}
      </button>
    </div>
  );
};

MenuButton.propTypes={
  text:PropTypes.node
}

export default MenuButton;
