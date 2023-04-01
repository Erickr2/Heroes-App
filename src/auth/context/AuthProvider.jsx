
// 2. proveedor de informacion

import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './authReducer';

import { types } from '../types/types';



//funcion que manda mi usuario al localStorage y retorna el logged si hay un usuario activo, caso contrario regresa un usuario en null
const init = () => { //cuando recarga la pantalla detecta el usuario en el localStorage y lo carga, me ayuda a mantener la data persistente
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user:user,
  }
}

export const AuthProvider = ({ children }) => { //childre -> todos los componenete hijos , HOC high order component

  //reducer que recibe mi autReducer(switch de acciones) y mi estado inicial, desestructuramos el estado y el dispatch que me ayuda a despachar mis acicones del autReducer
  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  //funcion que recibe un nombre  y dentro tiene una action que trae el tipo de accion y un payload(usuario: id, name) y el dispatch que manda mi action
  const login = (name = '') => {

    const user = {id: '123', name} //objeto que tiene un id y el nombre que recibe el login
    const action = { type: types.login, payload: user}//accion que se dispara

    localStorage.setItem('user', JSON.stringify(user)) //manda el usuario al localStorage, me ayuda a mantener la dat persistente en este caso el usuario

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };

    dispatch(action);
  }

  return (

    //proveedor de mi contexto que envuelve a todos los componentes hijos, exponemos el estado de mi reducer y mi funcion login
    <AuthContext.Provider value={{
      ...authState,
      //methods
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

