import Button from 'react-bootstrap/Button';
import './ItemListContainer.scss'

export const ItemListContainer = ({nombre, curso}) => {
    return (
        <section className='container'>
            <h2>Our products</h2>
            <hr/>
            <p>Welcome {nombre}</p>
            <p>{curso}</p>
            <Button variant="success">Click me</Button>
        </section>
    )
}
