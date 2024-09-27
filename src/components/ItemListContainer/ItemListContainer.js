import Button from 'react-bootstrap/Button';

export const ItemListContainer = ({nombre}) => {
    return (
        <section>
            <h2>Our products</h2>
            <hr/>
            <p>Welcome {nombre}</p>
            <Button variant="success">Click me</Button>
        </section>
    )
}
