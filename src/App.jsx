import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import UsersContext from './context/UsersContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <UsersContext>
        <Home />
        <RoutesPages />
      </UsersContext>
    </>
  );
}
export default App;
