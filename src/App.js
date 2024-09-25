import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import { Navbar } from "./components/Navbar/Navbar"; */
import { Navbar2 } from "./components/Navbar/Navbar2";
import Servicios from './components/Servicios/Servicios';
import { Nosotros } from './components/Nosotros/Nosotros';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const profesor = {
    nombre: "John Dane",
    rol: "Profesor de React",
    curso: "React"
  }

  const clock = () => <div>The time is {new Date().toLocaleTimeString()}</div>
  
  const contenido = "Welcome"
  /* const estilo = { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px", width: "50%", border: "5px solid black" } */

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <p style={estilo}>{contenido}</p> */}
      <p className='clock'>{clock()}</p>
      <p className='welcome'>{contenido}</p>
      <ItemListContainer nombre={profesor.nombre} />
      <Nosotros titulo={"Hi " + profesor.nombre} content={"Este es el curso de " + profesor.curso} />
      <Nosotros titulo="Hi everybody" content="Este es el contenido" />
      <Nosotros />
      <Servicios />
    </div>
  );
}

export default App;
