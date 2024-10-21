import Button from "react-bootstrap/Button";
import "./ItemListContainer.scss";

export const ItemListContainer = ({ nombre, rol, curso }) => {
  const promesa = new Promise((resolve, reject) => {
    /* resolve("Promesa cumplida"); */
    reject ("Promesa rechazada")
  });

  console.log(promesa);

/*   promesa.then((resp) => { // Capturo con resp el string que le pasé a la promesa como parámetro para el caso que se cumpla
    console.log(resp)
  }); */

  promesa.catch((error) => { // Capturo con resp el string que le pasé a la promesa como parámetro para el caso que se cumpla
    console.log(error)
  });

  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    width: "50%",
    border: "5px solid black",
    margin: "50px auto",
    padding: "20px 0 30px 0",
  };
  return (
    <div id="test" style={estilo}>
      <section>
        <p>
          Welcome <br />
          {nombre} <br />
          {rol} del curso de {curso}
        </p>
        <Button
          variant="success"
          onClick={() =>
            (document.getElementById("test").innerHTML = `Welcome ${nombre}`)
          }
        >
          Log in
        </Button>
      </section>
    </div>
  );
};
