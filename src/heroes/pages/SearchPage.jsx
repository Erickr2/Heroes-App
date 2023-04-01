import React from 'react'
import { useForm } from '../../hooks/useForm'
import {useLocation, useNavigate} from 'react-router-dom'
import queryString from 'query-string' //paquete para manipular los query params
import { getHeroByName } from '../helpers'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {

  const navigate = useNavigate();//obtener la navegacion
  const location = useLocation();//nos ayuda a leer el query param,obtener informacion de la localizacion donde estamos, aqui se encunetra el search, viene lo que buscamos en el input
  const {q = ''} = queryString.parse(location.search)//nos ayuda a separar como objeto los query params ej. {?q=algo&asc=true} aqui se tiene el valor y el asc. le indicamos que de nuestra location.search que es donde estan los query params 
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0); //regresa un boolean
  const showError = (q.length > 0) && heroes.length === 0; 

  const {onInputChange, SearchText } = useForm({ SearchText: q }); //hook para controlar formulario, le decimos que el estado incial en caso de tener data es q, que es el query param

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if(SearchText.trim().length <= 1) return;
    
    navigate(`?q=${ SearchText }`) //hago una navegacion a la misma ruta por eso no se pone (./) y le mandamos el query param ${SearchText} que es lo que escribe el usuario en el input 
  }

  return (
    <>

<h1>Search</h1>
        <hr />

      <div className="row"> {/* row pone el contenido en una fila  -----  ocupa 12 espacios */}

        <div className="col-5"> {/* ocupa 5 espacios  */}
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>

            <input
              type="text"
              placeholder="Search a hero"
              className='form-control'
              name='SearchText'
              autoComplete='off'
              value={SearchText}
              onChange={onInputChange}

            />

            <button className='btn btn-outline-primary mt-1'>
              Buscar
            </button>
          </form>
        </div>

        <div className='col-7'> {/* ocupa 7 espacios */}
          <h4> Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}>Search a Hero</div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>No hero with <b>{q}</b></div>

          {
            heroes.map( hero => (<HeroCard key={hero.id} {...hero} />)) //hacemos spred a los heroes para pasarlos todos
          }

        </div>
      </div>

    </>
  )
}

