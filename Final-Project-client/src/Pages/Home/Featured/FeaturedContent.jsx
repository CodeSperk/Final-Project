import MenuButton from "../../../Components/MenuButton/MenuButton";
import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedContent = () => {

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const currentDate = new Date();
  const monthName = monthNames[currentDate.getMonth() -1];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const today = `${monthName} ${day} , ${year}`;


  return (
    <div className="text-white flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="md:w-1/2">
        <img src={featuredImg} alt="" className="w-full"/>
      </div>
      <div className="space-y-2 md:w-1/2">
        <p className="text-[1.2rem]">{today}</p>
        <p className="text-[1.5rem]">WHERE CAN I GET SOME?</p>
        <p>Savor our exquisite featured dish, crafted with premium ingredients and culinary expertise to deliver an unforgettable dining experience.</p>

        <MenuButton text="read more"></MenuButton>
      </div>
    </div>
  );
};

export default FeaturedContent;