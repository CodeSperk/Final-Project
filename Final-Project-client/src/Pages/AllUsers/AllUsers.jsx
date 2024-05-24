import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {data: users =[]} = useQuery({
    queryKey:["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    }
  })

  console.log(users);
  return (
    <div className="flex w-full justify-center py-12">
      <div className="p-6 bg-slate-100 rounded-lg">
    
    <h4>Total Users: {users.length}</h4>


  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr className="bg-[var(--clr-accent)] text-white text-base uppercase">
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, idx) => (
          <tr key={idx} className="">
            <td>{idx + 1}</td>
            <td>
              {user.name}
            </td>
            <td>{user.email}</td>
            <td>
              <div className="bg-[var(--clr-accent)] rounded-sm p-2 text-white w-fit mx-auto">
                <FaUsers></FaUsers>
              </div>
              </td>
            <td>
              <button
                className="bg-red-700 rounded-sm p-2 text-white flex mx-auto">
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
    
  );
};

export default AllUsers;