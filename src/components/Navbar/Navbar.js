import './Navbar.scss'

export const Navbar = (props) => {
    const { itemsCart } = props;
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">Home</h1>

                <nav className="header__navbar">
                    <p className="header__navlink">Asistencia</p>
                    <p className="header__navlink">Salud</p>
                    <p className="header__navlink">Nutrición</p>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;