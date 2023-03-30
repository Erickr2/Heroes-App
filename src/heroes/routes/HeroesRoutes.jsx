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
                    <Route path="DC" element={<DcPage />} />                
                    <Route path="Search" element={<SearchPage />} />         {/* :id -> comodin */}      
                    <Route path="Hero/:id" element={<HeroPage />} />          {/* :id -> comodin hace referencia al id de los heros */}

                    <Route path="/" element={<Navigate to={"/Marvel"} />} /> 

                </Routes>
            </div>
        </>
    )
}

