import {DO_REQUEST, ACTUAL_POSITION} from "../actions/actions";



export const mainReducer = (state={}, action) =>{
  switch (action.type){
  case DO_REQUEST :
    return{
      ...state,
      db: action.payload
    };
  case ACTUAL_POSITION :
    return{
      ...state,
      currentPosition: action.payload
    };
  default : return state;
  }
};