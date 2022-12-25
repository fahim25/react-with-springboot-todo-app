import './App.css';
// import Counter from './components/counter/Counter';
import {TodoApp} from './components/counter/todo/TodoApp';



function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
        <>
          <div className='container'>
            <TodoApp />
          </div>
        </>
    </div>
  );
}

export default App;
