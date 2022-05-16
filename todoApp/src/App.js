import React, { useState } from "react";
import "./style.css";
import { Form, Container, Button, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaPlus, FaTrash } from "react-icons/fa";

export const App = () => {
  const intialData = JSON.parse(localStorage.getItem("todoList"));
  const [todoList, setTodoList] = useState([...intialData]);
  const [text, setText] = useState("");

  const addTodo = () => {
    const newTodo = [
      ...todoList,
      {
        data: text,
        date: new Date().toLocaleString().split(",")[0],
        isCompleted: false,
      },
    ];

    setText("");
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  };

  const toggleTodoCompletion = (idx) => {
    const newTodo = todoList.map((todo, index) =>
      index === idx ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  };

  const deleteTodo = (idx) => {
    const response = window.confirm("Do you want to delete ? ");

    if (response) {
      const newTodo = todoList.filter((_, index) =>
        index === idx ? false : true
      );

      setTodoList(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
    }
  };

  return (
    <Container className="mt-5 text-center p-3Ee">
      <h3>Whats your plan Today?</h3>
      <br />
      <Row>
        <Col xs={10}>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
          />
          <br />
        </Col>
        <Col xs={2} className="p-0">
          <Button onClick={addTodo}>
            <FaPlus />
            <label className="ms-2">Add</label>
          </Button>
        </Col>
      </Row>
      <br />
      <br />

      {todoList.length > 0
        ? todoList.map((todo, index) => {
            return (
              <Row>
                <Col xs={10}>
                  <Alert
                    variant={todo.isCompleted ? "danger" : "primary"}
                    className="text-start"
                    style={{
                      cursor: "pointer",
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() => toggleTodoCompletion(index)}
                  >
                    <h3>{todo.data}</h3>

                    <small>{todo.date}</small>
                  </Alert>
                </Col>

                <Col className="mt-4">
                  <FaTrash
                    size="40"
                    color="red"
                    onClick={() => deleteTodo(index)}
                  />
                </Col>
              </Row>
            );
          })
        : "No todos"}
    </Container>
  );
};
