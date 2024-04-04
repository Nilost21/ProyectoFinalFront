import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Products from "../pages/Products/Products";
import PlansPage from "../pages/Plans/PlansPage";
import ClassPlan from "../pages/Plans/ClassPlan";
import MusclePlan from "../pages/Plans/MusclePlan";
import FullPlan from "../pages/Plans/FullPlan";

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/*"
          element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>}
        />

        {/* Rutas para paginas de planes */}

        <Route path="/plans" element={<PlansPage />} /> {/* esta ruta es momentanea */}
        <Route path="/plans/clases" element={<ClassPlan />} />
        <Route path="/plans/entrenamiento" element={<MusclePlan />} />
        <Route path="/plans/completo" element={<FullPlan />} />

        {/* Fin rutas para paginas de planes */}
      </Routes>
    </>
  );
};
export default RoutesPages;
