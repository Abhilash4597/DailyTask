import React, { useState } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
