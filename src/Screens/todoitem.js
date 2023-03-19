import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useRef, useState, useEffect } from "react";
const Todoitem = ({ todo, onDelete, handleEdit }) => {
  return (
    <>
      <div>
        <Container className="my-2">
          <h5>{todo.title}</h5>
          <p>{todo.desc}</p>
          <Button
            variant="danger"
            type="submit"
            size="sm"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </Button>
          <Button
            className="mx-2"
            variant="success"
            size="sm"
            onClick={() => {
              handleEdit(todo);
            }}
          >
            Edit
          </Button>

          <hr />
        </Container>
      </div>
    </>
  );
};

export default Todoitem;
