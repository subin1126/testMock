import './App.css';
import TodoList from './Components/TodoList/todolist';
import Calendar from './Components/Calendar/calendar';

function App() {
  return (
    <div className="App">
      <div className='calendar'>
        <Calendar />
      </div>

      <div className='todo'>
        <h1>TodoList</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
