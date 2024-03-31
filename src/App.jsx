/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesPages from './routes/Routes';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
// import UsersContext from './context/UsersContext';
// import { userProvider } from './context/UsersContext';

function App() {
  return (
    <>
      {/* <UsersContext> */}

      <NavbarComponent />

      <RoutesPages />
      {/* </UsersContext> */}
    </>
  );
}
export default App;
