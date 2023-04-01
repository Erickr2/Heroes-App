
import {Navigate, Route, Routes} from 'react-router-dom'
import {MarvelPage, DcPage, HeroesRoutes} from '../heroes' //importacion de barril
import {Login} from '../auth' //importacion de barril
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
   <>
   <Routes>                                                  {/* mis rutas  */}

    <Route path="login" element={
    <PublicRoute>
      <Login />
    </PublicRoute>
    
    } />               

    <Route path="*" element={  //envolvemos la ruta HeroesRoutes que queremos hacer privada en el privateRoute
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    } /> 

    {/* <Route path="login" element={ <Login /> } />  forma normal sin proteger ruta*/}


   </Routes>
   </>
  )
}

