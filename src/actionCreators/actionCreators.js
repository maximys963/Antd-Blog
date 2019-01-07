import {START_REQUEST, START_ADDING_COMMENT} from "../actions/actions";


   export const doRequest = (items) =>( {
        type: START_REQUEST,
    });

   export const postComment = (items) => ({
       type: START_ADDING_COMMENT,
       payload: items
   });


