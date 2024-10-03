import { useState } from 'react';
import './Counter2.scss'

export const Counter2 = () => {

    let [contador1, setContador1] = useState(0)
    let [contador2, setContador2] = useState(0)

    // OPTION 1
    const incrementar1 = () => {
        setContador1(contador1 + 1)
    }
    const incrementar2 = () => {
        setContador2(contador2 + 1)
    }

    return (
        <div className='counter2'>
            <h2>Counter</h2>
            <h5>Count independently</h5>
            <hr />
            <p onClick={incrementar1}>{contador1}</p>
            <hr />
            <p onClick={incrementar2}>{contador2}</p>
        </div>
    );


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
};

export default Counter2;