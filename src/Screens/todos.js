import React from "react";
import TodoItem from "./todoitem";
const Todos = (props) => {
  return (
    <div className="container">
      {Array.isArray(props.todos) && props.todos.length === 0 ? (
        <p style={{ color: "black", fontWeight: "bold" }}>
          No todos to display
        </p>
      ) : (
        props.todos.map((todo) => {
          return (
            <div key={todo.sno}>
              <TodoItem
                todo={todo}
                onDelete={props.onDelete}
                handleEdit={props.handleEdit}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Todos;
