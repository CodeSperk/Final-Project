import PropTypes from 'prop-types';

const CoverSec = ({img, title, description}) => {
  return (
    
    <div
      className="hero max-h-60 md:max-h-80 lg:max-h-[500px] xl:max-h-[700px]"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition:"cover",
        height: "700px"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
    
        <div className="bg-black bg-opacity-40 w-4/5 md:w-2/3 h-2/3 md:h-1/2 flex flex-col justify-center items-center rounded-md text-center p-2 md:p-6 lg:p-10 xl:p-20">
          <h2 className="text-white mb-2 uppercase">{title}</h2>
          <p className="text-white"> {description} </p>
        </div>
    </div>
  );
};

CoverSec.propTypes={
  img:PropTypes.node,
  title:PropTypes.node,
  description:PropTypes.node,
}

export default CoverSec;
