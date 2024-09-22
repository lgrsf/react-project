import './App.css';
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  const contenido = "Welcome"
  const estilo = {display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px", width: "50%", border: "5px solid black"}
  
  return (
    <div>
      <Navbar />
      <p style={estilo}>{contenido}</p>
    </div>
  );
}

export default App;
