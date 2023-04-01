
import {heroes} from '../data/heroes'

export const getHeroByName = ( name = '') => {
  
    name.toLocaleLowerCase().trim(); //lo paso a minusculas y quito los espacios para que no cuente como un valor 

    if(name.length === 0 ) return []; 

    return heroes.filter ( hero => hero.superhero.toLocaleLowerCase().includes(name))
}


