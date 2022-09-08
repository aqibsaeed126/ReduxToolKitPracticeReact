import { createSlice } from '@reduxjs/toolkit';
import  cakeSlice  from '../cake/cakeSlice';

const initialState = {
    numOfIcecreams : 20
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
        builder.addCase(cakeSlice.actions.ordered, (state) => {
            state.numOfIcecreams --;
        })
    }

})

export default icecreamSlice;