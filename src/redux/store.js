import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

const gifSearchList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCHLIST_GIFS':
            return action.payload
        default:
            return state;
    }
}
 
function* getGifsFromGiphy() {
    try {
        const response = yield axios({
            method: 'GET',
            url: `https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=pVkZImtH8Z2tLWXZIYKEpx9gg834IFtG`
        }) 
        yield put({
            type: 'SET_SEARCHLIST_GIFS',
            payload: response.data
        })
    } catch (error) {
        console.log('Error when fetching GIFs from API:', error)
    }
}

function* rootSaga() {
yield takeLatest('SAGA/GET_SEARCHLIST_GIFS', getGifsFromGiphy)
}

const store = createStore(
    combineReducers({
        gifSearchList
    }),
    applyMiddleware(sagaMiddleware, logger)
);

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export default store;