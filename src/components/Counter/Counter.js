import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  let [contador, setContador] = useState(0);
  console.log(contador);

  // OPTION 1
  /*     const incrementar = () => {
        setContador(contador + 1)
    } */

  /*     return (
        <div className='counter' onClick={incrementar}>
            <h2>Counter</h2>
            <hr />
            <p>{contador}</p>
        </div>
    ); */

  // OPTION 2
  const estilo = { fontSize: "50px" };

  return (
    <div className="counter" onClick={() => setContador(contador + 1)}>
      <h2>Counter</h2>
      <hr />
      <p style={estilo}>{contador}</p>
      <p>Last click: {new Date().toLocaleString()}</p>
    </div>
  );
};

export default Counter;
