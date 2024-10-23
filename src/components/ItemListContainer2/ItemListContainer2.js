import "./ItemListContainer2.scss";
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { pedirDatos } from "../mock/pedirDatos";

export const ItemListContainer2 = () => {

    /*     const [algo, setAlgo] = useState(true)
    
        const handleAlgo = () => {
            setAlgo(!algo)
        } */

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

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(items.map((item) => ({
        id: item.id,
        nombre: item.nombre,
    })));

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                setItems(resp);
            })
            .catch((error) => {
                console.log("ERROR", error);
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []) // Array vacío para que se ejecute sólo en el montaje    

    return (
        <div className="container my-5">

            <h1>Nuestros productos</h1>
            <hr />

            {
                loading
                    ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : <>
                        {
                            items.map((item) => (
                                <div key={item.id}>
                                    <h2>{item.nombre}</h2>
                                    <img src={item.img} alt={item.alt}></img>
                                    <p>{item.desc}</p>
                                    <h4>Precio: ${item.precio}</h4>
                                    <hr />
                                </div>
                            ))
                        }
                    </>
            }

        </div>
    );
};
