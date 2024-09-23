import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import Servicios from './components/Servicios/Servicios';

function App() {

  const contenido = "Welcome"
  const estilo = { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px", width: "50%", border: "5px solid black" }

  return (
    <div>
      <Navbar />
      <p style={estilo}>{contenido}</p>
      <Servicios />
    </div>
  );
}

export default App;
