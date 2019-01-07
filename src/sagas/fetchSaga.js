import fetch from 'isomorphic-fetch';
import {takeEvery, all, put } from 'redux-saga/effects'
import {DO_REQUEST  } from "../actions/actions";


function* fetchData() {
    const response = yield fetch('https://ghibliapi.herokuapp.com/films');
    const json = yield response.json();
    console.log(json);
    yield put({
        type: DO_REQUEST,
        payload: json
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