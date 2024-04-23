import { useAuth } from "../../context/Utils/authUtils"
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={'/'} />;
  }

  if (!user.isAdmin) {
    return <Navigate to={'/'} />;
  }

  return (
    children
  )
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminRoute
