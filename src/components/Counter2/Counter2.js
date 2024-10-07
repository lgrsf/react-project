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
            alert("Out of stock")
        }
    }

    const decrementar = () => {
        if (contador1.stock < 10) {
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
            <div className='containerCounter'>
                <h4 className="btnCounterLeft" onClick={decrementar}>-</h4>
                <h4>{contador1.contador1}</h4>
                <h4 className="btnCounterRight" onClick={incrementar}>+</h4>
            </div>
            <p>Stock: {contador1.stock}</p>
            <p>Last click: {contador1.date.toLocaleString()}</p>
            <hr />

        </section>
    );

}


export default Counter2;