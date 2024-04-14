import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Products from "../pages/Products/Products";
/* import PlansPage from "../pages/Plans/PlansPage"; */
import ClassPlan from "../pages/Plans/ClassPlan";
import MusclePlan from "../pages/Plans/MusclePlan";
import FullPlan from "../pages/Plans/FullPlan";
import PlanList from "../pages/Plans/PlanList";

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

        <Route path="/plans" element={<PlanList />} /> {/* esta ruta es momentanea podria poner a PlanList en su lugar*/}
        <Route path="/plans/class-plan" element={<ClassPlan />} />
        <Route path="/plans/muscle-plan" element={<MusclePlan />} />
        <Route path="/plans/full-plan" element={<FullPlan />} />

        {/* Fin rutas para paginas de planes */}
      </Routes>
    </>
  );
};
export default RoutesPages;
