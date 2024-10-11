import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome Saranga
        </h1>
        <button onClick={() => navigate('/user')}>
            Enter
        </button>
      </header>
    </div>
  );
}

export default App;
