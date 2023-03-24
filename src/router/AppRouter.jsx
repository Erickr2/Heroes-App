
import {Navigate, Route, Routes} from 'react-router-dom'
import {MarvelPage, DcPage, HeroesRoutes} from '../heroes' //importacion de barril
import {Login} from '../auth' //importacion de barril


export const AppRouter = () => {
  return (
   <>
                                                {/* barra de navegacion  */}
   <Routes>                                                  {/* mis rutas  */}
    <Route path="login" element={<Login />} />               {/* cada una de mis rutas  */}
    <Route path="*" element={<HeroesRoutes />} />               {/* cada una de mis rutas  */}


   </Routes>
   </>
  )
}

