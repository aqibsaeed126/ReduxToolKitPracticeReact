const applyMiddleware = require('@reduxjs/toolkit').applyMiddleware;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

let configureStore = require('@reduxjs/toolkit').configureStore;
let combineReducers = require('@reduxjs/toolkit').combineReducers;

let cakeReducer = require('../features/cake/cakeSlice').reducer;
let icecreamReducer = require('../features/iceCream/iceCreamSlice').reducer;

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
})

let store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;