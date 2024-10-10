import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './SuperButton.scss'

export const SuperButton = ({ buttonText }) => {

    let [click, setClick] = useState(0)

    return (
        <div className="button">
            <Button variant="primary" onClick={() => setClick(click + 1)}>{buttonText}</Button>
            <p>Clicks: {click}</p>
            </div>
    )
}