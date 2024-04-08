import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import Products from '../pages/Products/Products';
import Profile from '../pages/Profile';

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/*"
          element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>}
        />
      </Routes>
    </>
  );
};
export default RoutesPages;
