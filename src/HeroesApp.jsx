import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'

const HeroesApp = () => {
  return (

    //provedor del contexto que me ayuda a pasar informacion de mi provider a toda mi aplicacion ya que envuelve el punto mas alto de mi app
    <AuthProvider>

    <AppRouter /> {/* componenete que tiene todas mis rutas  */}

    </AuthProvider>
    
  )
}

export default HeroesApp
