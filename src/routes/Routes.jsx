import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoutes';
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Profile from '../pages/Profile/Profile';

import ClassPlan from "../pages/Plans/ClassPlan";
import MusclePlan from "../pages/Plans/MusclePlan";
import FullPlan from "../pages/Plans/FullPlan";

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/*"
          element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>}
        />

        {/* Rutas para paginas de planes */}        
        <Route path="/class-plan" element={<ClassPlan />} />
        <Route path="/muscle-plan" element={<MusclePlan />} />
        <Route path="/full-plan" element={<FullPlan />} />
        {/* Fin rutas para paginas de planes */}
        
      
        <Route path="/*" element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} isAdminRoute={true} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes >
    </>
  );
};

export default RoutesPages;

/**
 * PrivateRoute es un componente que se encarga de verificar si el usuario está autenticado y,
 * si es necesario, si tiene permiso de administrador para acceder a la ruta.
 *
 * isAdminRoute es una prop opcional que indica si la ruta es exclusiva para administradores.
 * prop específica que indica si la ruta protegida es una ruta de administrador o no
 *
 * Si el usuario está autenticado pero intenta acceder a una ruta /admin y no tiene el rol ADMIN,
 * se le redirige a la página principal.
 *
 * Las demás rutas privadas (/products y /profile) solo se protegen por la autenticación del usuario.
 */
