import axios from 'axios';
import {takeEvery, takeLatest, all, put, call, take } from 'redux-saga/effects'
import {
    DO_REQUEST,
    START_REQUEST,
    START_ADDING_COMMENT,
    ADD_COMMENT
} from "../actions/actions";


function getPosts() {
    return axios({
        method: 'get',
        url: 'http://localhost:3001/db'
    })
    
}

function* fetchDataWorker() {
    const response = yield call(getPosts);
    console.log(response.data);
    yield put({
        type: DO_REQUEST,
        payload: response.data
    })
}

function postComment(payload){
    console.log(payload);
     return axios({
        method: 'post',
        url: 'http://localhost:3001/comments',
        data: payload
     })
}

function* postCommentWorker(action){
    try{
        const payload = action.payload;
        const response = yield call(postComment, payload);
        console.log(response);
    } catch (error){
        console.log(error)
    }


}
function* watchFetchData(){
    yield takeEvery(START_REQUEST, fetchDataWorker);
}

function* watchComment () {
    yield takeLatest(START_ADDING_COMMENT, postCommentWorker);
}

export default function* rootSaga(){
    yield all([
        watchFetchData(),
        watchComment()
    ])

}


