import { heroes } from "../data/heroes";


//funcion que recibe un publisher y valida que sea valido en el arreglo de valid publisher
export const getHeroesByPublisher = ( publisher ) => {
  const validPublisher = ['DC Comics', 'Marvel Comics']; //arreglo de publisher permitidos

  if( !validPublisher.includes(publisher)){  //si mi arreglo no contiene el publisher que recibo
    throw new Error(`${publisher} is not valid publisher`) //tira error
  }

  return heroes.filter( heroe => heroe.publisher === publisher); //caso contrario filtra los heroes que contengan el publihser que recibo
}

