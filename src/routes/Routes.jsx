import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Planes from '../pages/planes/Planes';

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes/>} />
      </Routes>
    </>
  );
};
export default RoutesPages;
