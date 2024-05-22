import PropTypes from "prop-types";
import CardButton from "../../../Components/CardButton/CardButton";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MenuCard = ({ item }) => {
  const {image, name, recipe, _id, price} = item;
  // console.log(item);
  const {user} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();


  const handleAddToCart = food => {
    if(user && user.email){
      // console.log(user, user.email);

      const cartItem = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price  
      }
      axiosSecure.post("/carts", cartItem)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            icon: "success",
            title: `${cartItem.name} Added to the cart!`,
            showConfirmButton: false,
            timer: 1200
          });
        }
      })

    }else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login to Add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then(result => {
        if(result.isConfirmed){
          navigate("/login", {state:{from:location}});
        }
      })
    }
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
