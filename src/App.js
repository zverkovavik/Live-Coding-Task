import './App.css';
import './Components/Questions/Questions.css';
import { Questions } from './Components/Questions/Questions.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main_title">Live Coding Task</h1>
      </header>
      <Questions />
    </div>
  );
}

export default App;
