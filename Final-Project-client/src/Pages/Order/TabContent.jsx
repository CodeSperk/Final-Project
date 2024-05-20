import PropTypes from "prop-types";
import MenuCard from "../Menu/MenuCategory/MenuCard";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "./pagination.css"

const TabContent = ({ items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  // console.log(currentItems);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  }


  const prevArrow = <FaArrowLeft />;
  const nextArrow = <FaArrowRight />;

  return (
    <>
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {currentItems.map((item) => (
        <MenuCard key={item._id} item={item}></MenuCard>
      ))}
    </div>

    <div className="pagination text-lg md:text-xl font-semibold">
      {
        items.length > itemsPerPage && 
        <ReactPaginate
        breakLabel="..."
        nextLabel={nextArrow}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={prevArrow}
        renderOnZeroPageCount={null}
        className="flex gap-4 items-center mt-8 container"
      />
      }
      </div>

    
    </>

  );
};

TabContent.propTypes = {
  items: PropTypes.array,
};
export default TabContent;
