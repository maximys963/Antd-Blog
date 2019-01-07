import {DO_REQUEST} from "../actions/actions";


export const mainReducer = (state={}, action) =>{
switch (action.type){
    case DO_REQUEST :
        return{
            ...state,
            data: action.payload
        };
    default : return state
}
};