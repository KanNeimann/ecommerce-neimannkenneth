import './NavBar.css'

const NavBar = () => {
    return (
        <div id="main-header">
            <div className="container">
                <nav className="navigation">
                    <h1>Volcanic</h1>
                    <div>
                        <ul className="nav-links">
                            <a href="."><li className="nav-link active">Home</li></a>
                            <a href="."><li className="nav-link">Store</li></a>
                            <a href="."><li className="nav-link">About us</li></a>
                            <a href="."><li className="nav-link">Contact</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
//rafce

/* llamar en App.js <NabVar/> importarla tambien arriba  on import './components/NavBar/NavBar' 
puedo importar estilos arriba de este archivo con un archivo css con el mismo nombre que el componente*/ 