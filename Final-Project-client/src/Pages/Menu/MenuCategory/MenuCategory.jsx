import PropTypes from 'prop-types';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import CoverSec from '../../../Components/SectionCover/CoverSec';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import MenuButton from '../../../Components/MenuButton/MenuButton';


const MenuCategory = ({items, btnText, heading, subHeading, coverImg, coverTitle, coverDescription}) => {

  return (
    <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
      {heading && <SectionHeader
        heading={heading}
        subHeading={subHeading}
      ></SectionHeader>}

      {
        (coverImg && coverTitle) && <CoverSec
        img={coverImg}
        title={coverTitle}
        description={coverDescription}
      ></CoverSec>
      }

      <MenuItem items={items}></MenuItem>
      <MenuButton text={btnText}></MenuButton>
    </section>
  );
};

MenuCategory.propTypes={
  items:PropTypes.array,
  btnText:PropTypes.string,
  heading:PropTypes.string,
  subHeading:PropTypes.string,
  coverImg:PropTypes.string,
  coverTitle:PropTypes.string,
  coverDescription:PropTypes.string
}

export default MenuCategory;
