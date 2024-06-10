import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-box">
        <div className="todo-list-input">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Añadir tarea..."
            className='input-inside'
          />
        </div>
        <div className="todo-list">
          <div className="list-group">
            {todos.length === 0 ? (
              <li className="list-group-item">No hay tareas, añadir tareas</li>
            ) : (
              todos.map(todo => (
                <li
                  key={todo.id}
                  onMouseEnter={() => setShowDeleteButton(true)}
                  onMouseLeave={() => setShowDeleteButton(false)}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{todo.text}</span>
                  {showDeleteButton && (
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  )}
                </li>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
