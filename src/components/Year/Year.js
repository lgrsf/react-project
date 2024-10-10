import { useState } from "react";
import "./Year.scss";

export const Year = () => {
  let [year, setYear] = useState(2024);

  return (
    <p className="year" onClick={() => setYear(year + 1)}>{year}</p>
  );
};

export default Year;
