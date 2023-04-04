import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [listItem, setListItem] = useState([]);

  function handleChange(e) {
    let inputValue = e.target.value;
    setItem(inputValue);
  }

  function handleClick() {
    setListItem(preValue => {
      return [...preValue, item];
    });
    setItem('');
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {listItem.map((item, i) => {
          return (
            <ul key={i}>
              <li className='list'>
                {item}
                <span>
                  <i className="fa-solid fa-trash-can icon-delete"></i>
                  <i className="fa-solid fa-pen-to-square"></i>
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
