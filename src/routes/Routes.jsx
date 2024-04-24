import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';
import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import Products from '../pages/Products/Products';
import Profile from '../pages/Profile/Profile';
import Error404 from '../pages/Error404/Error404';
import About from '../pages/About/About';

import ClassPlan from '../pages/Plans/ClassPlan';
import MusclePlan from '../pages/Plans/MusclePlan';
import FullPlan from '../pages/Plans/FullPlan';
import BookingPage from '../pages/ClassBookings/BookingPage';

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />

        <Route path="/class-plan" element={<ClassPlan />} />
        <Route path="/muscle-plan" element={<MusclePlan />} />
        <Route path="/full-plan" element={<FullPlan />} />

        <Route path="/class-bookings" element={<BookingPage />} />

        <Route
          path="/*"
          element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} isAdminRoute={true} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPages;
