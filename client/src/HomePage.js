import './App.css';
import './HomePage.css';
import TodoList from './components/TodoList';

function HomePage() {
  return (
    <div className="todo-app">
        <TodoList />
    </div>
  );
}

export default HomePage;
