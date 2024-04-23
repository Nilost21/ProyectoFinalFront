import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';
import CartContext from './context/CartContext';
import ClassContext from './context/ClassContex';
import EnrollmentContext from './context/EnrollmentContext';

import { useRoutes } from 'react-router-dom';
import PrivateRoute from './routes/private-route/PrivateRoute';
import PublicRoute from './routes/public-route/PublicRoute';
import AdminRoute from './routes/admin-route/AdminRoute';

import Home from './pages/Home/Home';
import AdminProducts from './pages/Admin/AdminProducts';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import AdminClass from './pages/Admin/AdminClass';
import AdminUsers from './pages/Admin/AdminUsers';
import ClassPlan from './pages/Plans/ClassPlan';
import MusclePlan from './pages/Plans/MusclePlan';
import FullPlan from './pages/Plans/FullPlan';
import AdminEnrollments from './pages/Admin/AdminEnrollments';

function App() {

  const routes = [
    {
      path: "*",
      element: <PublicRoute><h1 className="title text-light mt-3 ">Not found</h1></PublicRoute>
    },
    {
      path: "/",
      element: <PublicRoute><Home /></PublicRoute>
    },
    {
      path: "/products",
      element: <PublicRoute><Products /></PublicRoute>
    },
    {
      path: "/class-plan",
      element: <PublicRoute><ClassPlan /></PublicRoute>
    },
    {
      path: "/muscle-plan",
      element: <PublicRoute><MusclePlan /></PublicRoute>
    },
    {
      path: "/full-plan",
      element: <PublicRoute><FullPlan /></PublicRoute>
    },
    {
      path: "/adminproducts",
      element: <AdminRoute> <AdminProducts /></AdminRoute>
    },
    {
      path: "/adminusers",
      element: <AdminRoute> <AdminUsers /></AdminRoute>
    },
    {
      path: "/adminclasses",
      element: <AdminRoute> <AdminClass /> </AdminRoute>
    },
    {
      path: "/enrollments",
      element: <AdminRoute> <AdminEnrollments /> </AdminRoute>
    },
    {
      path: "/profile",
      element: <PrivateRoute> <Profile /> </PrivateRoute>
    }
  ];

  const routeselement = useRoutes(routes);

  return (
    <>
      <UsersContext>
        <ProductsContext>
          <CartContext>
            <ClassContext>
              <EnrollmentContext>
                {routeselement}
              </EnrollmentContext>
            </ClassContext>
          </CartContext>
        </ProductsContext>
      </UsersContext>
    </>
  );
}

export default App;
