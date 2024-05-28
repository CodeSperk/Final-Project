import { FaRegEdit } from "react-icons/fa";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../../Hooks/useMenu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageItems = () => {
  const [isPending, menu] = useMenu();
  isPending && <div>Loading</div>
  return (
    <main>
    <div className="mt-12">
    <SectionHeader subHeading="Hurry Up" heading="Manage All Items"></SectionHeader>
    </div>
    <div className="p-4 md:p-8 lg:p-10 w-full my-16 mx-4 md:mx-10 lg:mx-20 bg-slate-100 rounded-lg">
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
                  <div
                    className="bg-[var(--clr-accent)] rounded-sm p-2 text-white w-fit mx-auto cursor-pointer"                  >
                    <FaRegEdit title="Update"></FaRegEdit>
                  </div>
                </td>
                <td>
                  <button
                    className="bg-red-700 rounded-sm p-2 text-white flex mx-auto"
                    
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