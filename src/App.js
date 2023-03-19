import Header from "./Screens/header";
import "./App.css";
import Todos from "./Screens/todos";
import Footer from "./Screens/footer";
import Addtodo from "./Screens/addtodo";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const editRef = useRef(null);
  const closeRef = useRef(null);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleEdit = (todo) => {
    setSelectedTodoId(todo.sno);
    setEditTitle(todo.title);
    setEditDesc(todo.desc);
    editRef.current.click();
  };
  const handleSave = (id) => {
    let newTodos = JSON.parse(JSON.stringify(todos));
    for (let index = 0; index < newTodos.length; index++) {
      const element = newTodos[index];
      if (element.sno === id) {
        newTodos[index].title = editTitle;
        newTodos[index].desc = editDesc;
        break;
      }
    }
    setTodos(newTodos);
    setEditTitle("");
    setEditDesc("");
    closeRef.current.click();
  };
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos(todos.concat(myTodo));
  };
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todo app" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} handleEdit={handleEdit} />
      <button
        type="button"
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={editRef}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Todo
              </h1>
              <button
                ref={closeRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={editTitle}
                    onChange={(e) => {
                      setEditTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={editDesc}
                    onChange={(e) => {
                      setEditDesc(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleSave(selectedTodoId);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
