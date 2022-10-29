import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGrocery, removeGrocery } from '../../features/groceries/groceriesSlice'

const Form = ({ addGroceryItem }) => {
    // const groceries = useSelector((state) => state.groceries.value)
    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const submitGroceryItem = () => {
        // event.preventDefault()

        const newGroceryItem = {
            name: name,
            amount: amount
      }
      dispatch(addGrocery(newGroceryItem))
      // passing in the newGroceryItem that we want in our action as the payload
        addGroceryItem(newGroceryItem)
        clearInputs()
    }
    // maybe there's a save button and when that button is clicked it posts or deletes with the fetch call functions
//     export const bugAdded <-- this would be addGrocery(actionCreator) = (description <-- newGroceryItem) => ({
//         type: actions.BUG_ADDED, <-- ADD_GROCERY, we don't have to do this anymore with redux toolkit, the toolkit is creating all of this for us
//         payload: {
//             description: description <-- newGroceryItem(data/object we're passing to the store)
//     }
// })

    const clearInputs = () => {
        setName('')
        setAmount('')
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Grocery Item'
                name='name'
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                type='text'
                placeholder='Amount'
                name='amount'
                value={amount}
                onChange={event => setAmount(event.target.value)}
            />
            <button onClick={() => submitGroceryItem()}>Add Grocery</button>
        </div>
    )
}

export default Form