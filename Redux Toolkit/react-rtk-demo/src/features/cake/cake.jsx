import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import cakeSlice from './cakeSlice';

function Cake() {
  const {ordered, restocked} = cakeSlice.actions;
  const numOfCakes = useSelector((state)=> state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of cakes - {numOfCakes} </h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(3))}>Restock Cake</button>
    </div>
  )
}

export default Cake