import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';


const sagaMiddleware = createSagaMiddleware();

const gifSearchList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCHLIST_GIFS':
            return action.payload.data
        default:
            return state;
    }
}
 
function* getGifsFromGiphy(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/search/${action.payload}`
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


sagaMiddleware.run(rootSaga);

export default store;