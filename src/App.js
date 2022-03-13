import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {

  const [todo,setTodo] =useState();

  const dispatch = useDispatch();                   //used to call actions//

  const Todo = useSelector(state => state.Todo);

  const { todos } =Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  } 

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

               

  return (
    <div className="App">
      <header className='App-header'>
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input  className='input-style' placeholder='Enter a Todo' onChange={(e) => setTodo(e.target.value)}/>
          <button type='submit'>Go</button>
        </form>
        <ul className='allTodos'>
          {
            todos &&
             todos.map((t) => (
               <li key={t.id} className='singleTodo'>
                  <span className='todoText'>{t.todo}</span>
                  <button onClick={() => removeHandler(t)}>Del</button>
               </li>
             ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;
