import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Addtodo = (props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDesc] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and desc must be given");
    } else {
      props.addTodo(title, description);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <Container>
        <h1 style={{ marginTop: "60px" }} className="text-center">
          Todo List
        </h1>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Title</b>
            </Form.Label>
            <Form.Control
              type="Title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Add to list
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Addtodo;
