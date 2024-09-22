import './App.css';
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  const productos = [
    {
      id: "1",
      name: "Centolla",
      tipe: "natural",
      price: "$1.200",
    },
  ];

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
