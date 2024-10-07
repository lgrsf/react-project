import { useState } from 'react';
import './Counter2.scss'

export const Counter2 = () => {

    const stock = 3

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
            alert("Deleted")
        }
    }

    return (
        <section className='counter2'>
            <h1>Counter</h1>
            <hr />
            <div id="demo" >
                <span className='containerCounter'>
                    <h4 className="btnCounterLeft" onClick={decrementar}>-</h4>
                    <h4>{contador1.contador1}</h4>
                    <h4 className="btnCounterRight" onClick={incrementar}>+</h4>
                </span>
                <p>Stock: {contador1.stock}</p>
                <p>Last click: {contador1.date.toLocaleString()}</p>
            </div>
            <hr />
        </section>
    );

}


export default Counter2;