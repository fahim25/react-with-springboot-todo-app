import './App.css';
// import Counter from './components/counter/Counter';
import {TodoApp} from './components/counter/todo/TodoApp';



function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
        <body>
          <div className='container'>
            <TodoApp />
          </div>
        </body>
    </div>
  );
}

export default App;
