import { useState } from 'react';
import './Counter2.scss'

export const Counter2 = () => {

    const stock = 10

    const [contador1, setContador1] = useState({
        contador1: 0,
        date: new Date(),
        stock: stock
    })

    const incrementar = () => {
        if (contador1.stock > 0) {
            setContador1({
                contador1: contador1.contador1 + 1,
                date: new Date(),
                stock: contador1.stock - 1
            })
        } else {
            document.getElementById("demo").innerHTML =
                `<p 
                style=
                "
                display: flex;
                text-align: center;
                justify-content: center;
                align-items: center;
                margin: 10px auto;
                color: white; 
                font-weight: bold; 
                font-size: 25px; 
                background-color: red;
                width: 200px;
                heigth: 150px;
                padding: 10px;
                border-radius: 10px;
                border: 2px solid red;
                "
                >Out of stock</p>
                <a href="">Back</a>
               `

        }
    }

    const decrementar = () => {
        if (contador1.contador1 > 0) {
            setContador1({
                contador1: contador1.contador1 - 1,
                date: new Date(),
                stock: contador1.stock + 1
            })
        } else {
            alert("There are 0 items in your cart")
        }
    }

    /*     useEffect(() => {
            console.log("Componente montado")
    
        }, []) */ // Se coloca un array vacío para que se ejecute sólo en el montaje

/*     useEffect(() => {
        console.log("Componente montado")

    }) */ // Sin el array vacío se ejecute sólo en el montaje y en cada actualización

/*     useEffect(() => {
        console.log("Componente actualizado")

    }, [contador1]) */ // Sin el array vacío se ejecute sólo en el montaje y en cada modificación del estado del contador1

    return (
        <section className='counter2'>
            <h1>Counter</h1>
            <hr />
            <div id="demo" >
                <span className='containerCounter'>
                    <h4 className="btnCounterLeft" onClick={decrementar}>-</h4>
                    <h4 className='contador'>{contador1.contador1}</h4>
                    <h4 className="btnCounterRight" onClick={incrementar}>+</h4>
                </span>
                <h5>Stock: {contador1.stock}</h5>
                <p>Last click: {contador1.date.toLocaleString()}</p>
            </div>
            <hr />
        </section>
    );

}


export default Counter2;