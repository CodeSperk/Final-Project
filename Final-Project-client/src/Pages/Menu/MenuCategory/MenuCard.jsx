import PropTypes from "prop-types";
import CardButton from "../../../Components/CardButton/CardButton";
const MenuCard = ({ item }) => {
  const {image, name, recipe } = item;
  // console.log(item);

  const handleAddToCart = food => {
    console.log(food);
  };
  return (
    <div className="bg-[var(--bg-primary)] max-w-96 flex flex-col">
      <img src={image} alt="" className="w-full" />
      <div className="flex-1 p-6 pb-0">
        <div>
          <h4>{name}</h4>
          <p className="mt-4">{recipe}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div onClick={() => handleAddToCart(item)}>
          <CardButton text="Add to Cart"></CardButton>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object,
};

export default MenuCard;
