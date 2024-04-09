/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';

function App() {
  return (
    <>
      <UsersContext>
        <ProductsContext>
          <NavbarComponent />
          <FooterComponent />
          <RoutesPages />
        </ProductsContext>
      </UsersContext>
    </>
  );
}
export default App;
