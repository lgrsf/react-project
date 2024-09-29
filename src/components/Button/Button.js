import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Button.scss'

function FavoriteColor() {
    const [color, setColor] = useState("___________");

    return (
        <div className="button">
            <h1>My favorite color is {color}!</h1>
            <Button variant="primary"
                onClick={() => setColor("blue")}
            >Blue</Button>
            <Button variant="danger"
                onClick={() => setColor("red")}
            >Red</Button>
            <Button variant="warning"
                onClick={() => setColor("yellow")}
            >Yellow</Button>
                        <Button variant="dark"
                onClick={() => setColor("black")}
            >Black</Button>
        </div>
    );
}

export default FavoriteColor;