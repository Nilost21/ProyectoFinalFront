import { useAuth } from "../../context/Utils/authUtils"
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

  const { isLoggedIn } = useAuth();

  console.log("Is the user logged in?", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={'/'} />;
  }

  return (
    children
  )
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;
