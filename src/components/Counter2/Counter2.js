import { useState } from 'react';
import './Counter2.scss'

export const Counter2 = () => {

    const max = 10

    let [contador1, setContador1] = useState(0)
    let [contador2, setContador2] = useState(10)

    // OPTION 1
    const incrementar = () => {
        if (contador1 < max) {
            setContador1(contador1 + 1)
        } else {
            setContador1(contador1)
            alert("Out of stock")
        }
    }

/*     const decrementar = () => {
        if (contador2 > 0) {
            setContador2(contador2 - 1)
        } else {
            setContador2(contador2)
            alert("Out of stock")
        }
    } */

    const decrementar = () => {
        contador2 > 0 ? setContador2(contador2 - 1) : setContador2(contador2)
        }

    return (
        <div className='counter2'>
            <h2>Counter</h2>
            <h5>Count independently</h5>
            <hr />
            <button className="btn btn-primary" onClick={incrementar}>CLICK ME</button>
            <h4>{contador1}</h4>
            <p>Last click: {new Date().toLocaleString()}</p>
            <hr />
            <button className="btn btn-primary" onClick={decrementar}>CLICK ME</button>
            <h4>{contador2}</h4>
            <p>Last click: {new Date().toLocaleString()}</p>
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