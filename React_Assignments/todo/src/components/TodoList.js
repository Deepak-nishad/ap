import React from "react";

function TodoList(props) {
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className="icons">
          <i
            className="fa-sharp fa-regular fa-trash icon-delete"
            onClick={(e) => {
              props.deleteListItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
