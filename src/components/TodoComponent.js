import React, { useState } from 'react';
import FormComponent from './FormComponent';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

const ToDoComponent = ({ toDoItems, completeToDo, removeToDo, updateToDo }) => {
  const [editItem, setEditItem] = useState({
    id: null,
    value: ''
  });

  const submitUpdatedItem = value => {
    updateToDo(editItem.id, value);
    setEditItem({
      id: null,
      value: ''
    });
  };

  if (editItem.id) {
    return <FormComponent edit={editItem} onSubmit={submitUpdatedItem} />;
  }

  return toDoItems.map((item, index) => (
    <div
      className={item.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={item.id} onClick={() => completeToDo(item.id)}>
        {item.text}
      </div>
      <div className='icons'>
        <RiDeleteBin2Line
          onClick={() => removeToDo(item.id)}
          className='delete-icon'
        />
        <AiOutlineEdit
          onClick={() => setEditItem({ id: item.id, value: item.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default ToDoComponent;
