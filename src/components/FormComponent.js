import React, { useState, useEffect, useRef } from 'react';

function FormComponent(props) {
  const [inputText, setInputText] = useState(props.edit ? props.edit.value : '');

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  });

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputText
    });
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your task'
            value={inputText}
            onChange={handleInputChange}
            name='text'
            ref={inputReference}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='List your task'
            value={inputText}
            onChange={handleInputChange}
            name='text'
            className='todo-input'
            ref={inputReference}
          />
          <button onClick={handleSubmit} className='todo-button'>
            ADD
          </button>
        </>
      )}
    </form>
  );
}

export default FormComponent;
