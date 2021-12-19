import NavBar from "../NavBar/NavBar";
import CartWidget from '../CartWidget/CartWidget'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header id="main-header">
            <div className="head-content">
                <div className="logo">
                    <Link to='/' className='titulo'>
                        <h2>Volcanic</h2>
                    </Link>
                </div>
                <div className="content">
                    <NavBar />
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </header>
    )

}

export default Header;