import {Link} from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
    return (
        <div>
                <nav className="navigation">
                    <ul className="nav-links">
                        <Link to='/'>Home</Link>
                        <Link to='/category/graficas'>Graficas</Link>
                        <Link to='/category/procesadores'>Procesadores</Link>
                        <Link to='/category/rams'>Rams</Link>
                        <Link to='/category/ssds'>SSDs</Link>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar
//rafce

/* llamar en App.js <NabVar/> importarla tambien arriba  on import './components/NavBar/NavBar'
puedo importar estilos arriba de este archivo con un archivo css con el mismo nombre que el componente*/