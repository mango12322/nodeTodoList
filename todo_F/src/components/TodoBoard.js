import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteItem, toggleitem }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            key={item._id}
            item={item}
            deleteItem={deleteItem}
            toggleitem={toggleitem}
          />
        ))
      ) : (
        <h2>정보가 없습니다!</h2>
      )}
    </div>
  );
};

export default TodoBoard;
