import Button from "react-bootstrap/Button";
import "./ItemListContainer.scss";

export const ItemListContainer = ({ nombre, curso }) => {
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
    <div id="demo" style={estilo}>
      <section>
        <p>Welcome <br/>{nombre} <br/>{curso}</p>
        <Button
          variant="success"
          onClick={() => (document.getElementById("demo").innerHTML = 
          `
          <div style={}>
          <Button>Log out</Button>
          </div>
          ` 
          )}
        >
          Log in
        </Button>
      </section>
    </div>
  );
};
