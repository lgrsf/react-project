import { useState } from 'react';
import './Counter.scss'

export const Counter = () => {

    let [contador, setContador] = useState(1)
    console.log(contador)
    const incrementar = () => {
        /* console.log(contador) */
        /* contador++ */
        setContador(contador + 1)
    }

    return (
        <div className='counter' onClick={incrementar}>
            <h2>Counter</h2>
            <hr />
            <p>{contador}</p>
        </div>

    );
};

export default Counter;