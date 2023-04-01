import { types } from "../types/types";
//Nota: los reducer estan destinados a ser funciones puras, no llman recursos externos, ni apis, ni funciones externas
//Unicamente se resuelven con el estado y la accion que reciben.


//3. reducer que me ayuda  a despachar mis acciones, siempre trae un estado y una action. en este caso evalua el action.type y el caso viene de mis acciones que define en Types.js
export const AuthReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,      //se recomienda siempre hacer la desestructuracion del estado para mantener el estado anterior 
                logged: true,
                user: action.payload
            }
            
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }

}