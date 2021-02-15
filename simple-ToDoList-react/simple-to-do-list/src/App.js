/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

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

  return (

    <Card title="Todo App" className="m-4">
      <Container>
        <h2>Lista de atividades</h2>
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
          <ul>
            {todos.map((todo, index) => (
              <li
                key={todo.title}
                style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
              >
                <input
                  className="m-2"
                  type="checkbox"
                  onClick={() => checkComplete(index)}
                />
                {todo.title}
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </Card>
  );
};

export default App;
