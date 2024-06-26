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
import About from './pages/About/About';
import MyClasses from './pages/Profile/MyClasses';
import AdminClass from './pages/Admin/AdminClass';
import AdminUsers from './pages/Admin/AdminUsers';
import ClassPlan from './pages/Plans/ClassPlan';
import MusclePlan from './pages/Plans/MusclePlan';
import FullPlan from './pages/Plans/FullPlan';
import AdminEnrollments from './pages/Admin/AdminEnrollments';
import Error404 from './pages/Error404/Error404';
import Contact from './pages/Contact/Contact';
import BookingPage from './pages/ClassBookings/BookingPage';

function App() {
  const routes = [
    {
      path: '*',
      element: (
        <PublicRoute>
          <Error404 />
        </PublicRoute>
      ),
    },
    {
      path: '/',
      element: (
        <PublicRoute>
          <Home />
        </PublicRoute>
      ),
    },
    {
      path: '/products',
      element: (
        <PublicRoute>
          <Products />
        </PublicRoute>
      ),
    },
    {
      path: '/about',
      element: (
        <PublicRoute>
          <About />
        </PublicRoute>
      ),
    },
    {
      path: '/about',
      element: (
        <PublicRoute>
          <About />
        </PublicRoute>
      ),
    },
    {
      path: '/class-plan',
      element: (
        <PublicRoute>
          <ClassPlan />
        </PublicRoute>
      ),
    },
    {
      path: '/contact',
      element: (
        <PublicRoute>
          <Contact />
        </PublicRoute>
      ),
    },
    {
      path: '/muscle-plan',
      element: (
        <PublicRoute>
          <MusclePlan />
        </PublicRoute>
      ),
    },
    {
      path: '/full-plan',
      element: (
        <PublicRoute>
          <FullPlan />
        </PublicRoute>
      ),
    },
    {
      path: '/class-bookings',
      element: (
        <PublicRoute>
          <BookingPage />
        </PublicRoute>
      ),
    },
    {
      path: '/adminproducts',
      element: (
        <AdminRoute>
          {' '}
          <AdminProducts />
        </AdminRoute>
      ),
    },
    {
      path: '/adminusers',
      element: (
        <AdminRoute>
          {' '}
          <AdminUsers />
        </AdminRoute>
      ),
    },
    {
      path: '/adminclasses',
      element: (
        <AdminRoute>
          {' '}
          <AdminClass />{' '}
        </AdminRoute>
      ),
    },
    {
      path: '/enrollments',
      element: (
        <AdminRoute>
          {' '}
          <AdminEnrollments />{' '}
        </AdminRoute>
      ),
    },
    {
      path: '/profile',
      element: (
        <PrivateRoute>
          <Error404 />{' '}
        </PrivateRoute>
      ),
    },
    {
      path: '/myclasses',
      element: (
        <PrivateRoute>
          <MyClasses />{' '}
        </PrivateRoute>
      ),
    },
  ];

  const routeselement = useRoutes(routes);

  return (
    <>
      <UsersContext>
        <ProductsContext>
          <CartContext>
            <ClassContext>
              <EnrollmentContext>{routeselement}</EnrollmentContext>
            </ClassContext>
          </CartContext>
        </ProductsContext>
      </UsersContext>
    </>
  );
}

export default App;
