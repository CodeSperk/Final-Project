import PropTypes from 'prop-types';

const MenuItem = ({item}) => { 
  const {name, recipe, image, price} = item;
  return (
    <div className='flex gap-2 justify-between'>
    
        <img src={image} alt="" className='h-[104px] w-[118px] rounded-full rounded-tl-none mr-2'/>
     
      <div className='flex flex-col justify-between'>
        <h6>{name}</h6>
        <p>{recipe}</p>
      </div>
      <div>
        <p className='text-[1.2rem] text-[var(--clr-accent)]'>$<span>{price}</span></p>
      </div>
    </div>
  );
};

MenuItem.propTypes={
  item: PropTypes.object
}

export default MenuItem;