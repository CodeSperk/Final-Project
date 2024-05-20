import PropTypes from 'prop-types';
import MenuCard from "../Menu/MenuCategory/MenuCard";

const TabContent = ({items}) => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
</div>
  );
};

TabContent.propTypes = {
  items:PropTypes.array
}
export default TabContent;