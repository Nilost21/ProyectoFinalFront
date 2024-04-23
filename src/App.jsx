import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';
import CartContext from './context/CartContext';

function App() {
  return (
    <>
      <UsersContext>
        <ProductsContext>
          <CartContext>
            <RoutesPages />
          </CartContext>
        </ProductsContext>
      </UsersContext>
      
    </>
  );
}
export default App;