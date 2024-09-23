import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import { Navbar } from "./components/Navbar/Navbar"; */
import { Navbar2 } from "./components/Navbar/Navbar2";
import Servicios from './components/Servicios/Servicios';
import { Nosotros } from './components/Nosotros/Nosotros';

function App() {

  const contenido = "Welcome"
  /* const estilo = { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px", width: "50%", border: "5px solid black" } */

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <p style={estilo}>{contenido}</p> */}
      <p className='welcome'>{contenido}</p>
      <Nosotros />
      <Servicios />
    </div>
  );
}

export default App;
