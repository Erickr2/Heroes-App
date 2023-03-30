import {Link} from 'react-router-dom'

//componenete para validar si mi alter ego y mis characters son iguales y de ser asi no mandar nada, es decir solo se renderizan los que son diferentes actores
const CharactersByHero = ({alter_ego, characters}) => (alter_ego === characters) ? <></> : <p> {characters} </p>


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {


    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text"> {alter_ego}</p>

                            <CharactersByHero characters={characters} alter_ego={alter_ego}/> 

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            
                           <Link to={`/hero/${id}`}>
                           Mas...
                           </Link> 

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

