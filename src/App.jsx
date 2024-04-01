/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import ProductsContext from './context/ProductsContext';

function App() {
  return (
    <>
      <ProductsContext>
        <NavbarComponent />
        <RoutesPages />
      </ProductsContext>
    </>
  );
}
export default App;
