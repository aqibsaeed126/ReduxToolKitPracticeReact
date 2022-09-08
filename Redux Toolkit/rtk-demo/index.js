const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').actions;

const icecreamActions = require('./features/icecream/iceCreamSlice').actions;

console.log('Initial Store state' , store.getState());


store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(3));
