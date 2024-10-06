import './Navbar.scss'

export const Navbar = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">Home</h1>

                <nav className="header__navbar">
                    <p className="header__navlink">Assistance</p>
                    <p className="header__navlink">Health</p>
                    <p className="header__navlink">Nutrition</p>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;