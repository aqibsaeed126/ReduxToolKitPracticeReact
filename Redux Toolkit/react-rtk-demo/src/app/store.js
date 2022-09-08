
import { applyMiddleware, getDefaultMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import  cakeSlice  from '../features/cake/cakeSlice'
import iceCreamSlice  from '../features/icecream/iceCreamSlice'
const logger = createLogger();

const rootReducer = combineReducers({
    cake: cakeSlice.reducer,
    icecream: iceCreamSlice.reducer,
})

let store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;