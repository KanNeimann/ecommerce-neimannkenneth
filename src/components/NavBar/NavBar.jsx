import {Link} from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
    return (
        <div>
                <nav className="navigation">
                    <ul className="nav-links">
                        <Link className="navLi" to='/'>Home</Link>
                        <Link className="navLi" to='/category/graficas'>Graficas</Link>
                        <Link className="navLi" to='/category/procesadores'>Procesadores</Link>
                        <Link className="navLi" to='/category/rams'>Rams</Link>
                        <Link className="navLi" to='/category/ssds'>SSDs</Link>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar
//rafce

/* llamar en App.js <NabVar/> importarla tambien arriba  on import './components/NavBar/NavBar'
puedo importar estilos arriba de este archivo con un archivo css con el mismo nombre que el componente*/