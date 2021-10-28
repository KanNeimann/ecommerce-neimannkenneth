import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";
import CartWidget from '../CartWidget/CartWidget'
import './Header.css'

const Header = () => {

    return (
        <header id="main-header">
            <Container className="head-content">
                <div className="logo">
                    <h2>Volcanic</h2>
                </div>
                <div className="content">
                    <NavBar />
                    <CartWidget />
                </div>
            </Container>
        </header>
    )

}

export default Header;