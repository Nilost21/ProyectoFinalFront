import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';
import CartContext from './context/CartContext';
import ClassContext from './context/ClassContex';

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
              {routeselement}
            </ClassContext>
          </CartContext>
        </ProductsContext>
      </UsersContext>
      
    </>
  );
}
<<<<<<< HEAD
export default App;
=======

export default App;
>>>>>>> 18be830bf61bbb5477dc2b30d85d39269d6ee9f4
