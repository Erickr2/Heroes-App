import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Login = () => {

  const {login} = useContext( AuthContext ) //extraemos nuestra funcion login con ayuda del contexto
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || "/"; //obtenemos en lastPath y si no hay lo mandamos al home

    login('Bellakito')//se ejecuta la funcion y le mando el nombre

    navigate(lastPath, { //cada que se haga login va a ir al lastPat(la suma de su path y su busqueda si es que hizo una busqueda)
      replace: true
    })
  }
  return (
   <div className='container mt-5'>
    <h1>Login</h1>
    <hr />

    <button 
    onClick={onLogin}
    className='btn btn-primary'>
      Login
    </button>
   </div>
  )
}

