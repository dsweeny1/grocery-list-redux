import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    values: []
}
// initial state of things is always an object

export const groceriesSlice = createSlice({
    name: 'groceries',
    initialState,
    reducers: {
        addGrocery: (state, action) => {
            state.values.push(action.payload)
            // payload will house all data that we need to add the item (ie. name, amount, id)
        },
        removeGrocery: (state, action) => {
            state.values = state.values.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addGrocery, removeGrocery } = groceriesSlice.actions
export default groceriesSlice.reducer