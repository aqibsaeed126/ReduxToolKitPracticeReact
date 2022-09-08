import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import icecreamSlice from './iceCreamSlice';

export function Icecream(props) {
    const {ordered, restocked} = icecreamSlice.actions;
    const dispatch = useDispatch()
    const numOfIcecreams = useSelector((state)=> state.icecream.numOfIcecreams)
    
    return (
        <>
        <div>
            <h2>Number of icecream - {numOfIcecreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock icecream</button>
        </div>
        </>
    )
}
