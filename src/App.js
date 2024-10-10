import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* import { Navbar } from "./components/Navbar/Navbar"; */
import { Navbar2 } from "./components/Navbar/Navbar2";
import Servicios from "./components/Servicios/Servicios";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Container from "./components/Container/Container";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import Counter3 from "./components/Counter3/Counter3";
import Button from "./components/Button/Button";
import { SuperForm } from "./components/SuperForm/SuperForm";
import { SuperButton } from "./components/SuperButton/SuperButton";
import Example from "./components/Example/Example";
import Props from "./components/Props/Props";

function App() {
  const profesor = {
    nombre: "John Dane",
    rol: "Profesor",
    curso: "React",
  };

  const clock = () => <div>The time is {new Date().toLocaleTimeString()}</div>;

  /* const contenido = "Welcome" */
  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  };

  const estilo2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    maxWidth: "200px",
    margin: "0 auto",
  };

  const contenido2 = {
    title: "Welcome",
    subtitle: "This is my personal website",
    year: 2024,
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <p className='welcome'>{contenido}</p> */}
      <p className="welcome">{contenido2.title}</p>
      <p style={estilo}>{contenido2.subtitle}</p>
      <p style={estilo2}>{contenido2.year}</p>
      <p className="clock">{clock()}</p>
      <Props text="Props example" text2="Another props example" />
      <SuperForm title="Render Props:" render={SuperButton}></SuperForm>
      <Example />
      <Counter />
      <Counter2 />
      <Counter3 />
      {/* <p style={estilo}>{contenido}</p> */}
      <Button />
      <Container>
        <ItemListContainer nombre={profesor.nombre} rol={profesor.rol} curso={profesor.curso} />
      </Container>
      <Nosotros
        titulo={"Hi " + profesor.nombre}
        content={"Este es el curso de " + profesor.curso}
      />
      <Nosotros titulo="Hi everybody" content="Este es el contenido" />
      <Nosotros />
      <Servicios />
    </div>
  );
}

export default App;
