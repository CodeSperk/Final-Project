import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({children}) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if(loading  || isAdminLoading){
    return <div>Loading...</div>
  }

  if(user && isAdmin){
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

AdminRoutes.propTypes = {
  children: PropTypes.node
}

export default AdminRoutes;