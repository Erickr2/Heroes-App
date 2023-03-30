import { heroes } from "../data/heroes"

export const getHeroById = (id) => { //recibo un id y de mi arreglo de datos busco el hero que tenga el mismo id que recibo como arg
  return heroes.find( hero => hero.id === id);
}

