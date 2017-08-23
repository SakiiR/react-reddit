import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AsyncSubreddits from './AsyncSubreddits';
import { createStore, applyMiddleware } from 'redux';
import dispatchAction from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

const store = createStore(dispatchAction, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncSubreddits />
            </Provider>
        )
    }
}