import Button from "react-bootstrap/Button";
import "./ItemListContainer2.scss";

const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        desc: "Una descripción",
        precio: 1200,
        img: 'https://placehold.co/400'
    },
    {
        id: 2,
        nombre: "Producto 2",
        desc: "Una descripción",
        precio: 1500,
        img: 'https://placehold.co/400'
    },
    {
        id: 3,
        nombre: "Producto 3",
        desc: "Una descripción",
        precio: 1800,
        img: 'https://placehold.co/400'
    },
]


export const ItemListContainer2 = () => {

    /*     const pedirDatos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (retornar) {
                        resolve("Promesa resuelta")
                    } else {
                        reject("Promesa rechazada")
                    }
                }, 2000)
            })
        } */

    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        })
    }

    pedirDatos()
        .then((resp) => {
            console.log(resp);
        })
        .catch((error) => {
            console.log("ERROR", error);
        })

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
                <Button
                >
                    Log in
                </Button>
            </section>
        </div>
    );
};
