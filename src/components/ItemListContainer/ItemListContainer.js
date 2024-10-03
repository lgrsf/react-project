import Button from "react-bootstrap/Button";
import "./ItemListContainer.scss";

export const ItemListContainer = ({ nombre }) => {
  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    width: "50%",
    border: "5px solid black",
    margin: "50px auto",
  };

  return (
    <div id="demo" style={estilo}>
      <section>
        <p>Welcome <br/>{nombre}</p>
        <Button
          variant="success"
          onMouseEnter={() => (document.getElementById("demo").innerHTML = "Logged")}
        >
          Log in
        </Button>
      </section>
    </div>
  );
};
