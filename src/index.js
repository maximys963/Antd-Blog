import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {mainReducer} from './reducers/mainReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/fetchSaga'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './containers/Post'
import {DO_REQUEST} from "./actions/actions";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

store.dispatch({type: 'START_REQUEST'});

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
         <Route exact path='/' component={App}/>
         <Route path='/posts/:postId' component={Post}/>
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(
   <Root store={store}/>,
    document.getElementById('root'));

serviceWorker.unregister();
