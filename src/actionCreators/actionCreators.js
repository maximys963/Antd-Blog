import {START_REQUEST, START_ADDING_COMMENT, ACTUAL_POSITION} from "../actions/actions";


export const doRequest = () =>( {
  type: START_REQUEST,
});

export const postComment = (items) => ({
  type: START_ADDING_COMMENT,
  payload: items
});

export const dispatchPosition = (location) => ({
  type: ACTUAL_POSITION,
  payload: location
});


