import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";


export const HeroPage = () => {

  const {id} = useParams() //puedo tomar elementos de uan URL, en este caso el id que viene de mi heroesRutes
  
  const hero = useMemo( () => getHeroById(id), [id]) ;// funcion que busca el hero que coincida con el id que se manda, memorizamos el valor y agregamos las dependencias (id), cada que cambie el id  

  const navigate = useNavigate()
 
  const onBack = () => { //regresa a la pagina anterior
    navigate(-1);
  }

  if(!hero){ //si no recibo hero, redirecciono a la pantalla de marvel 
    return <Navigate to={"/Marvel"} />
  }


//caso contrario, regreso la info del hero que recibo 
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={`/assets/heroes/${id}.jpg`} 
        alt={hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"
         />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b>{ hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher: </b>{ hero.publisher}</li>
          <li className="list-group-item"> <b>First appearance: </b>{ hero.first_appearance}</li>

        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
        className="btn btn-outline-primary"
        onClick={onBack}
        > Regresar </button>

      </div>

    </div>
  )
}

