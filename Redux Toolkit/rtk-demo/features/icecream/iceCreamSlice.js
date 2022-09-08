const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').actions;

const initialState = {
    numOfIcecreams : 10
}
const icecreamSlice = createSlice({
    name: 'icecreamSlice',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }
    },
    // 21st syntax
    // extraReducers: {
    //     ['cakeSlice/ordered']: (state) => {
    //         state.numOfIcecreams --;
    //     }
    // }
    extraReducers: (builder)=> {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams --;
        })
    }

})

module.exports = icecreamSlice;