import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRout = ({children}) => {
  const {user} = useAuth();
  const location = useLocation();

  if(user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

PrivateRout.propTypes={
  children: PropTypes.node
}

export default PrivateRout;