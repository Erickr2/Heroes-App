

import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {//recibimos los componenete hijos 

    const {logged} = useContext(AuthContext);//extraemos si esta loggeado o no con ayuda de mi contexto 

  return (!logged)     //pregunatamos si no esta loggeado con un ternario
        ?  children//si no esta logeado muestra los hijos, en este caso el hijo solo es el login
        :<Navigate to="/Marvel"/>  //caso contrario navega a marvel
}

