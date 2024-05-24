import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    if(user.role !== "admin"){
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Admin!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: `${user._id} is an admin now`,
                icon: "success",
              });
            }
          });
        }
      });
    }
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then(res => {
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
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 w-full my-16 mx-4 md:mx-10 lg:mx-20 bg-slate-100 rounded-lg">
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
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div
                    className="bg-[var(--clr-accent)] rounded-sm p-2 text-white w-fit mx-auto cursor-pointer"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    {
                      user.role === "admin" ? <GrUserAdmin title="Admin"></GrUserAdmin> : 
                    <FaUsers title="User"></FaUsers>
                    }
                  </div>
                </td>
                <td>
                  <button
                    className="bg-red-700 rounded-sm p-2 text-white flex mx-auto"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
