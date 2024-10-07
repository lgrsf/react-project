import Button from 'react-bootstrap/Button';
import './SuperButton.scss'

export const SuperButton = ({ buttonText }) => {

    return (
        <div className="button">
            <Button variant="primary">{buttonText}</Button>
        </div>
    )
}

