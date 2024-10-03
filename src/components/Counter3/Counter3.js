import { useState } from 'react';
import './Counter3.scss'

export const Counter3 = () => {

    let [contador, setContador] = useState(0)

    // OPTION 1
    const incrementar = () => {
        setContador(contador + 1)
    }

    return (
        <div className='counter3'>
            <h2>Counter</h2>
            <hr />
            <p onClick={incrementar}>{contador}</p>
            <hr />
            <p onClick={incrementar}>{contador}</p>
        </div>
    );

};

export default Counter3;