import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGrocery, removeGrocery } from '../../features/groceries/groceriesSlice'

const Card = ({ name, amount, id, deleteGroceryItem }) => {
    const dispatch = useDispatch()
    // console.log(groceryItem)
    return (
        <div className='grocery-item-card' id={id} key={id}>
            <h3>{name}</h3>
            <h3>{amount}</h3>
            <button onClick={() => deleteGroceryItem(id)}>🗑</button>
        </div>
    )
}

export default Card