import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default RoutesPages;
