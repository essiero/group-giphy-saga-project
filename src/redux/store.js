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
const gifFavoritesList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_LIST':
            return action.payload
        default:
            return state;
    }
}

function* getFavorites(){
    try {
        const response = yield axios ({
            method: 'GET',
            url: '/api/favorites'
        })
        yield put ({
            type: "SET_FAVORITE_LIST",
            payload: response.data
        })
    } catch (error) {
        console.log('Error in GETTING favorites', error)
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

function* addNewFavorite(action) {
    try {
        console.log("should be aurl:", action.payload);
        const response = yield axios({
            method: 'POST',
            url: `/api/favorites/`,
            data: {info: action.payload}
        }) 
        yield getFavorites();
    } catch (error) {
        console.log('Error when posting favorite GIF to database:', error)
    }
}


function* rootSaga() {
yield takeLatest('SAGA/GET_SEARCHLIST_GIFS', getGifsFromGiphy)
yield takeLatest('SAGA/ADD_NEW_FAVORITE', addNewFavorite)
yield takeLatest('SAGA/GET_FAVORITES', getFavorites)
}

const store = createStore(
    combineReducers({
        gifSearchList,
        gifFavoritesList
    }),
    applyMiddleware(sagaMiddleware, logger)
);


sagaMiddleware.run(rootSaga);

export default store;