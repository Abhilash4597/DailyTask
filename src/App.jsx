import React, { useState } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import Todolist from './Components/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = inputText => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText])
    };
  };

  const deleteListItem = key => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div>
      <div>
        <TodoInput addList={addList} />
        <h1>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
