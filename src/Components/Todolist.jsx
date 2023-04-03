import React from 'react'

function Todolist(props) {
  return (
    <li>
      {props.item}
      <span style={{ marginLeft: '1rem' }}>
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={e => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
      <span style={{ marginLeft: '1rem' }}>
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
    </li>
  );
}

export default Todolist