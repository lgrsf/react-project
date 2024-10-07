import { useState } from 'react';
import './Counter2.scss'

export const Counter2 = () => {

    const stock = 10

    /* let [contador1, setContador1] = useState(0) */

    const [contador1, setContador1] = useState({
        contador1: 0,
        date: new Date(),
        stock: stock
    })


    let [contador2, setContador2] = useState(10)

    // OPTION 1
    /*     const incrementar = () => {
            if (contador1 < 10) {
                setContador1({
                    contador1: contador1.contador1 + 1,
                    date: new Date()
                })
            } else {
                setContador1(contador1)
                alert("Out of stock")
            }
        } */

    const incrementar = () => {
        if (contador1.stock > 0) {
            setContador1({
                contador1: contador1.contador1 + 1,
                date: new Date(),
                stock: contador1.stock - 1
            })
        } else {
            
            alert("Outf of stock")
        }
    }


const decrementar = () => {
    if (contador2 > 0) {
        setContador2(contador2 - 1)
    } else {
        setContador2(contador2)
        alert("Out of stock")
    }
}

/*     const decrementar = () => {
        contador2 > 0 ? setContador2(contador2 - 1) : setContador2(contador2)
        } */

return (
    <div className='counter2'>
        <h2>Counter</h2>
        <h5>Count independently</h5>
        <hr />
        <button className="btn btn-primary" onClick={incrementar}>+</button>
        <h4>{contador1.contador1}</h4>
        <p>Stock: {contador1.stock}</p>
        <p>Last click: {contador1.date.toLocaleString()}</p>
        <hr />
        <button className="btn btn-primary" onClick={decrementar}>-</button>
        <h4>{contador2}</h4>
    </div>
);

}

// OPTION 2
/*     return (
        <div className="counter2">
            <p onClick={() => setContador1(contador1 + 1)}></p>
            <h2>Counter 1</h2>
            <hr />
            <p>{contador1}</p>
 
            <p onClick={() => setContador2(contador2 + 1)}></p>
            <h2>Counter 2</h2>
            <hr />
            <p>{contador2}</p>
        </div>
    ); */

export default Counter2;