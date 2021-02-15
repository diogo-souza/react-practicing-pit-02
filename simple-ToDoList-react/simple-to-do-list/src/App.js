/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button, ListGroup,
} from 'react-bootstrap';
import { GiZeusSword, GiPencil } from 'react-icons/gi';

import Card from './components/Card';

const App = () => {
  const [todos, setTodos] = useState([{
    isCompleted: false,
  }]);
  const [text, setText] = useState('');

  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setTodos(newTodos);
  };

  const submitButtonAdd = () => {
    if (!text.trim()) {
      alert('Ta vazio');
      return;
    }
    setTodos([...todos, { title: text }]);
    setText('');
  };

  const deleteTodo = (event) => {
    todos.splice(event.target.value, 1);
    setTodos([...todos]);
  };

  return (

    <Card title="Todo App" className="m-4">
      <Container>
        <h2>
          Lista de atividades
          <GiPencil className="m-2" />
        </h2>
        <Row>
          <Col xl={12} md={9}>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Insira sua atividade do dia"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button disabled={!text.trim()} onClick={submitButtonAdd} type="button">
              Adicionar Todo
            </Button>
          </Col>
        </Row>
        <Row>
          <ListGroup className="m-3">
            {todos.map((todo, index) => (
              <ListGroup.Item
                key={todo.title}
                style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
                variant="primary"
                className="m-1"
              >

                <input
                  className="m-2"
                  type="checkbox"
                  onClick={() => checkComplete(index)}
                />

                {todo.title}
                <Button
                  type="button"
                  variant="danger"
                  className="m-2"
                  onClick={deleteTodo}
                  value={index}
                >
                  Del
                  <GiZeusSword className="m-2" />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </Card>
  );
};

export default App;
