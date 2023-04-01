import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


//barra de navegacion de mi sitio, se divide en dos secciones. cada una tiene su propio router 

export const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate(); //ch que me ayuda a navegar a la pantall de login

    const onLogOut = () => { 
        logout();
        navigate('/login', { //indico la paagina a la que voy a navegar y replace me ayuda a borrar el historial del stack de mis vistas, evita que pueda regresar a mi vista anterior
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name} {/* se debe poner el ? ya que si no esta autenticado va a leer undefined y con ? le decimos que si no hay nombre no continue */}
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