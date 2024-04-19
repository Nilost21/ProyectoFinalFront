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

  if (isAdminRoute && user.role !== '6611a95b23873e069120fe2f') {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

PrivateRoute.propTypes = {
  isAdminRoute: PropTypes.bool,
  redirectPath: PropTypes.string,
};
