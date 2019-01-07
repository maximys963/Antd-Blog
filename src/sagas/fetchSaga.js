import axios from 'axios';
import {takeEvery, all, put, call } from 'redux-saga/effects'
import {DO_REQUEST  } from "../actions/actions";


function getPosts() {
    return axios({
        method: 'get',
        url: 'http://localhost:3001/db'
    })
    
}

function* fetchData() {
    const response = yield call(getPosts);
    console.log(response.data);
    yield put({
        type: DO_REQUEST,
        payload: response.data
    })
}

function* watchFetchData(){
    yield takeEvery('START_REQUEST', fetchData);
}

export default function* rootSaga(){
    yield all([
        watchFetchData()
    ])

}