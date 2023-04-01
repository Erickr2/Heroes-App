

import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {//recibimos los componenete hijos 

    const {logged} = useContext(AuthContext);//extraemos si esta loggeado o no con ayuda de mi contexto 
    const {pathname, search} = useLocation() //extraemos el lastPath(ultima ruta que visito) y el searc (si hizo una busqueda)

    const lastPath = pathname + search; //el last path va a ser la suma de el ultimo path y la busqueda que hizo 
    localStorage.setItem('lastPath', lastPath); //grabamos en el localStorage la ultima ruta

  return (logged)     //pregunatamos si esta loggeado con un ternario
        ? children    //si esta logeado muestra los hijos
        :<Navigate to="/login"/> //caso contrario navega al login
}

