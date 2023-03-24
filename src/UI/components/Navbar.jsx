import { Link, NavLink, useNavigate } from 'react-router-dom';

//barra de navegacion de mi sitio, se divide en dos secciones. cada una tiene su propio router 

export const Navbar = () => {

    const navigate = useNavigate(); //ch que me ayuda a navegar a la pantall de login

    const onLogOut = () => { 
        navigate('/login', { //indico la paagina a la que voy a navegar y replace me ayuda a borrar el historial del stack
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/Marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                        to="/DC"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                        to="/Search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                        to="/Hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Uri bb
                    </span>

                    <button 
                    onClick={onLogOut}
                    className='nav-item nav-link btn'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}