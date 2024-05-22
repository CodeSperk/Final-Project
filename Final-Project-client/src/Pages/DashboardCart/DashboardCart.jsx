import { RiDeleteBin6Line } from "react-icons/ri";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useCart from "../../Hooks/useCart";

const DashboardCart = () => {
  const [cart] = useCart();

  const totalPrice = cart.reduce((prev, current) => prev + current.price , 0)

  const handleDeleteItem = (id) => {
    console.log(id);
  }
  
  return (
    <div className="px-12 w-full py-12">
      <div className="flex justify-center items-center">
        <SectionHeader
          subHeading="My Cart"
          heading="Wanna ADD More?"
        ></SectionHeader>
      </div>
      <div className="p-4 bg-slate-100">
        <div className="flex gap-6 justify-between py-4">
          <h4>Total Orders: {cart.length}</h4>
          <h4>Total Price: $ {totalPrice}</h4>
          <button className="bg-[var(--clr-accent)] text-white px-2 py-1 rounded">Pay</button>
        </div>


        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-[var(--clr-accent)] text-white text-base uppercase">
        <th></th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart?.map((item, idx) => <tr key={idx} className="">
          <td>{idx + 1}</td>
          <td><div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
          <button className="bg-red-700 rounded-sm p-2 text-white" onClick={() => handleDeleteItem(item._id)}><RiDeleteBin6Line /></button>
          </td>
        </tr>)
      }
    </tbody>
    
  </table>
</div>



      </div>
    </div>
  );
};

export default DashboardCart;
