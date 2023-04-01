import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

//funcion que recibe un publisher y recorre el arreglo de data que lo incluya 
export const HeroesList = ({ publisher }) => { 

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]) ; //obtengo mi lista de horoes

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'> {/* columnas de 3 */}
            {heroes.map((heroe) => ( //recorro mi lista de heroes 

                <HeroCard 
                key={heroe.id}
                {...heroe}
                />
                
            ))

            }
        </div>
    )
}

