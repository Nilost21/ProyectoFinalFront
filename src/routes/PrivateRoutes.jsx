import { useAuth } from '../context/Utils/authUtils';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAdminRoute, redirectPath = '/' }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  } // o redirige a una página de acceso denegado

  if (isAdminRoute && !user.isAdmin) {
    return <Navigate to={redirectPath} replace />; // Otra opción: redirigir a una página de acceso denegado
  }

  return <Outlet />
};

PrivateRoute.prototype = {
  isAdminRoute: PropTypes.bool,
  redirectPath: PropTypes.string
};