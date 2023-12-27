import React, { useState } from 'react';
import FormComponent from './FormComponent';
import ToDoComponent from './TodoComponent';

function ListComponent() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDoItem = newItem => {
    if (!newItem.text || /^\s*$/.test(newItem.text)) {
      return;
    }

    const updatedItems = [newItem, ...toDoItems];

    setToDoItems(updatedItems);
    console.log(...toDoItems);
  };

  const updateToDoItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDoItems(prevItems =>
      prevItems.map(item => (item.id === itemId ? newValue : item))
    );
  };

  const removeToDoItem = itemId => {
    const removedItems = [...toDoItems].filter(item => item.id !== itemId);

    setToDoItems(removedItems);
  };

  const completeToDoItem = itemId => {
    let updatedItems = toDoItems.map(item => {
      if (item.id === itemId) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setToDoItems(updatedItems);
  };

  return (
    <>
      <h1>TO-DO LIST 2024</h1>
      <FormComponent onSubmit={addToDoItem} />
      <ToDoComponent
        toDoItems={toDoItems}
        completeToDo={completeToDoItem}
        removeToDo={removeToDoItem}
        updateToDo={updateToDoItem}
      />
    </>
  );
}

export default ListComponent;
