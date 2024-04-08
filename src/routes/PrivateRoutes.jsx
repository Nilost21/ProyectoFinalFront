import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/Auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ isAdminRoute, redirectPath = '/' }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  } // o redirige a una página de acceso denegado

  if (isAdminRoute && user.role !== '6611a95b23873e069120fe2f') {
    return <Navigate to={redirectPath} replace />; // Otra opción: redirigir a una página de acceso denegado
  }

  return <Outlet />
};
