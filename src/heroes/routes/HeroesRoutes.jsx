import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI'
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>                                                     {/* mis rutas  */}
                    <Route path="Marvel" element={<MarvelPage />} />         {/* cada una de mis rutas  */}
                    <Route path="DC" element={<DcPage />} />                 {/* cada una de mis rutas  */}
                    <Route path="Search" element={<SearchPage />} />                 {/* cada una de mis rutas  */}
                    <Route path="Hero" element={<HeroPage />} />                 {/* cada una de mis rutas  */}

                    <Route path="/" element={<Navigate to={"Marvel"} />} />  {/* cada una de mis rutas  */}

                </Routes>
            </div>
        </>
    )
}

