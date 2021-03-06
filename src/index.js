import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import rootReducer, {rootSaga} from "./modules";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import {setToken, setUser} from "./modules/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

function loadUser() {
    try {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo) return;

        const token = JSON.parse(localStorage.getItem('token'));
        store.dispatch(setUser(userInfo));
        store.dispatch(setToken(token));

    } catch (e) {
        console.log('localStorage is not working');
    }
}


sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
