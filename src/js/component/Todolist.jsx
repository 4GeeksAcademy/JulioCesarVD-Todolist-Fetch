import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetchTodos();
  }, []);

 
  const fetchTodos = () => {
    fetch('https://playground.4geeks.com/todo/users/JulioCesarVD')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        return response.json();
      })
      .then(data => {
        setTodos(data.todos);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        setError('Failed to fetch todos from backend API');
      });
  };

 
  const addTodo = (label) => {
    fetch('https://playground.4geeks.com/todo/todos/JulioCesarVD', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ label, is_done: false }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add todo to backend API');
        }
        return response.json();
      })
      .then(data => {
        setTodos([...todos, data]);
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      
      });
  };

  
  const updateTodo = (id, label) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ label }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update todo on backend API');
        }
   
      })
      .catch(error => {
        console.error('Error updating todo:', error);
        
      });
  };

  
  const removeTodo = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete todo from backend API');
        }
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error(`Error deleting todo with ID ${id}:`, error);
      
      });
  };

  
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-box">
        <h2>Todo List</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.todoInput;
          addTodo(input.value);
          input.value = '';
        }}>
          <div className="todo-list-input d-flex gap-2">
            <input type="text" name="todoInput" placeholder="Agrega una tarea" className="input-inside"/>
            <button type="summit" class="btn btn-success ">Add</button>
          </div>
          
        </form>
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={todo.label}
                  onChange={(e) => updateTodo(todo.id, e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => removeTodo(todo.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className='btn btn-danger' onClick={clearTodos}>Clear All</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default TodoList;
