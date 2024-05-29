import { FaRegEdit } from "react-icons/fa";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../../Hooks/useMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [isPending, menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  isPending && <div>Loading</div>


  const handleDeleteItem = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  }

  return (
    <main className="px-12 py-12 w-full text-center">
    <div className="flex justify-center items-center">
        <SectionHeader
          subHeading="Hurry Up" heading="Manage All Items"
        ></SectionHeader>
      </div>

    <div className="p-4 md:p-8 lg:p-10 mt-10 bg-slate-100 rounded-lg">
      {/* <h4>Total Users: {users.length}</h4> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[var(--clr-accent)] text-white text-base uppercase">
              <th></th>
              <th>Item Image</th>
              <th>Item name</th>
              <th>Price </th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            menu.map((item, idx) => 
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td><img src={item.image} alt={item.name} className="w-16 rounded h-auto"/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/update/${item._id}`}>
                  <div
                    className="bg-[var(--clr-accent)] rounded-sm p-2 text-white w-fit mx-auto cursor-pointer">
                    <FaRegEdit title="Update"></FaRegEdit>
                  </div>
                  </Link>
                </td>
                <td>
                  <button
                    className="bg-red-700 rounded-sm p-2 text-white flex mx-auto"
                    onClick={() => handleDeleteItem(item._id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            )
           }
          </tbody>
        </table>
      </div>
    </div>
    </main>
  );
}
export default ManageItems;