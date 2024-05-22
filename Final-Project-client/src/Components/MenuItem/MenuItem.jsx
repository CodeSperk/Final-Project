import PropTypes from "prop-types";

const MenuItem = ({ items }) => {
  // console.log(items);

  // const {name, recipe, image, price} = item;
  return (
    <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div key={item._id} className="flex gap-2 justify-between">
          <img
            src={item.image}
            alt=""
            className="h-[104px] w-[118px] rounded-full rounded-tl-none mr-2"
          />

          <div className="flex flex-col justify-between">
            <h6>{item.name}</h6>
            <p>{item.recipe}</p>
          </div>
          <div>
            <p className="text-[1.2rem] text-[var(--clr-accent)]">
              $<span>{item.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
};

export default MenuItem;
