/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {

} from 'react-bootstrap';

const App = () => {
  const [todos, setTodos] = useState([{
    isCompleted: false,
  }]);
  const [text, setText] = useState('');

  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { title: text }]);
          setText('');
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index /*  checkComplete */) => (
          <li>
            <input className="m-2" type="checkbox" onClick={() => checkComplete(index)} style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
