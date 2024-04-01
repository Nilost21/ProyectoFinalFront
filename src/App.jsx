import MyNavbar from "./components/MyNavbar";
import './App.css';

import SignUp from "./components/SignUp";
import Login from "./components/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        {/* Aquí puedes agregar el resto de tu contenido de la aplicación */}
        <div style={{ marginTop: '70px' }}>
          {/* El estilo marginTop es para dar espacio debajo del navbar */}
          <h1>Contenido de tu aplicación</h1>
          {/* Agrega aquí el contenido de tu aplicación */}
          <Routes>
            <Route path="/registro" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
