import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/*"
          element={<h1 className="title text-light mt-3 ">NOT FOUND</h1>}
        />
      </Routes>
    </>
  );
};
export default RoutesPages;
