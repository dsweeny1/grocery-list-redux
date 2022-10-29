import React, { useState, useEffect } from 'react'
import './App.css';
import Items from '../Items/Items'
import Form from '../Form/Form'

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  const addGroceryItem = async (newGroceryItem) => {
    try {
      const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        body: JSON.stringify({
          id: newGroceryItem.id,
          name: newGroceryItem.name,
          amount: newGroceryItem.amount
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.log(error.message)
    }
    setGroceryItems([...groceryItems, newGroceryItem])
  };
  //put post in here

  // instead of a delete call we could use a patch to update their list of saved books
  // use patch request to replace old list with new updated list, removing a specific book by its ID
  const deleteGroceryItem = async (id) => {
    const deleteGroceries = groceryItems.filter(item => item.id !== id)
    try {
      const response = await fetch(`http://localhost:3001/items/${id}`, {
        'method': 'DELETE'
      });
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const newData = response.json();
      //newData is  updated array
      //check the type of data you're receiving by checking the endpoint(route) on the project specs
      return newData;
    }
    catch (error) {
      console.log(error.message)
  };
    setGroceryItems(deleteGroceries)
  }

  const getGroceryItem = async () => {

    const url = (`http://localhost:3001/items`)
    try {
      const response = await fetch(url)
      const groceryItems = await response.json()
      if (!response.ok) {
        throw new Error(response.status)
      }
      setGroceryItems(groceryItems)
    } catch(error) {
    }
  }
  

  useEffect(() => {
    getGroceryItem()
  }, [groceryItems])

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <Form 
      addGroceryItem={addGroceryItem}
      />
      <Items 
      groceryItems={groceryItems}
      deleteGroceryItem={deleteGroceryItem}
      />
    </div>
  );
}

export default App;
