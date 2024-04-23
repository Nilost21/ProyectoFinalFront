import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';
import ClassContext from './context/ClassContex';

import { useRoutes } from 'react-router-dom';
import PrivateRoute from './routes/private-route/PrivateRoute';
import PublicRoute from './routes/public-route/PublicRoute';
import AdminRoute from './routes/admin-route/AdminRoute';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import AdminClass from './pages/Admin/AdminClass';

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
      path: "/admin",
      element: <AdminRoute> <Admin /></AdminRoute>
    },
    {
      path: "/classes",
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
          <ClassContext>
            {routeselement}
          </ClassContext>
        </ProductsContext>
      </UsersContext>
    </>
  );
}

export default App;
