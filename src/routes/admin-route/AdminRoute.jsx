import { useAuth } from "../../context/Utils/authUtils"
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  console.log("A VER isLogged in", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={'/'} />;
  }

  console.log("A VER", user);
  console.log("A VER isAdmin", user.isAdmin);
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
