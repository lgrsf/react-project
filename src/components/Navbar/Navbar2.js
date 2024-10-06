import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

export const Navbar2 = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Assistance</Nav.Link>
                        <Nav.Link href="#features">Health</Nav.Link>
                        <Nav.Link href="#pricing">Nutrition</Nav.Link>
                    </Nav>
                    <FaShoppingCart href="#cart" cursor="pointer"/>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

