import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
  const {user} = useContext(AuthContext);
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