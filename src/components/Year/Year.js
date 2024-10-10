import { useState } from "react";
import "./Year.scss";

export const Year = () => {
  let [year, setYear] = useState(2024);

  let x = 0;

  return (
    <div>
      <p className="year" onClick={() => setYear(year + 1)}>
        {year}
      </p>
      <p id="demoyear" className="demoyear" onMouseMove={() => document.getElementById("demoyear").innerHTML = x+=1}>
        Count
      </p>
    </div>
  );
};

export default Year;
