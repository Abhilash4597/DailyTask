import React, { useState } from 'react';
import './App.css';
// import TodoInput from './Components/TodoInput';
// import Todolist from './Components/Todolist';

// function App() {
//   const [listTodo, setListTodo] = useState([]);

//   let addList = inputText => {
//     if (inputText !== '') {
//       setListTodo([...listTodo, inputText])
//     };
//   };

//   const deleteListItem = key => {
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key, 1);
//     setListTodo([...newListTodo]);
//   };
//   return (
//     <div>
//       <div>
//         <TodoInput addList={addList} />
//         <h1>TODO</h1>
//         <hr />
//         {listTodo.map((listItem, i) => {
//           return (
//             <Todolist
//               key={i}
//               index={i}
//               item={listItem}
//               deleteItem={deleteListItem}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
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
    setItem('')
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
        <ul>
          {listItem.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
