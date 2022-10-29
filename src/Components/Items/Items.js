import React from 'react'
import Card from '../Card/Card'

const Items = ({ groceryItems, deleteGroceryItem }) => {
    const groceryCards = groceryItems.map(item => {
        return (
            <Card 
                name={item.name}
                amount = {item.amount}
                id={item.id}
                key={item.id}
                deleteGroceryItem={deleteGroceryItem}
            />
        )
    })
    return (
        <div className='card-container' key={groceryCards.id}>
            {groceryCards}
        </div>
    )
}

export default Items