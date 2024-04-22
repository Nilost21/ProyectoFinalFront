import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import ProductsContext from './context/ProductsContext';
import UsersContext from './context/UsersContext';
import ClassContext from './context/ClassContex';

function App() {
  return (
    <>
      <UsersContext>
        <ProductsContext>
          <ClassContext>
            <RoutesPages />
          </ClassContext>
        </ProductsContext>
      </UsersContext>
    </>
  );
}
export default App;
