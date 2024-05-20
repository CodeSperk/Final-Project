import PropTypes from 'prop-types';

const PageBanner = ({img, title, description}) => {
  return (
    <div className='hero max-h-60 md:max-h-96 lg:max-h-[600px] 
    xl:max-h-[800px]'
      style={{
        backgroundImage:`url(${img})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"cover",
        height:"800px"
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='bg-black bg-opacity-40 w-3/4 
        md:w-2/3 h-1/2 md:h-2/5 flex flex-col justify-center
         items-center rounded-md md:mt-20 lg:mt-28'>
          <h1 className="text-white mb-2 uppercase">{title}</h1>
          <p className="text-white md:text-lg lg:text-xl">{description}</p>
      </div>
      
    </div>
  );
};

PageBanner.propTypes={
  img:PropTypes.node,
  title:PropTypes.node,
  description:PropTypes.node,
}

export default PageBanner;