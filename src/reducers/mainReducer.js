import {DO_REQUEST} from "../actions/actions";


export const mainReducer = (state={}, action) =>{
switch (action.type){
    case DO_REQUEST :
        return{
            ...state,
            db: action.payload
        };
    default : return state
}
};