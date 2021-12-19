import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
                <nav className="navigation">
                    <ul className="nav-links">
                        <NavLink className="navLi" to='/' activeClassName='active'>Home</NavLink>
                        <NavLink className="navLi" to='/category/gpus' >Graficas</NavLink>
                        <NavLink className="navLi" to='/category/cpus' >Procesadores</NavLink>
                        <NavLink className="navLi" to='/category/rams' >Rams</NavLink>
                        <NavLink className="navLi" to='/category/ssds' >SSDs</NavLink>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar