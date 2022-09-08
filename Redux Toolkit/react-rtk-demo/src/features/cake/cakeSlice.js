
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCake: 10
}
const cakeSlice = createSlice({
    name: 'cakeSlice',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCake--;
        },

        restocked: (state, action) => {
            state.numOfCake += action.payload;
        }
    }
});

export default cakeSlice;