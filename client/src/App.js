import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To Social Aquarist!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          target="_blank"
          rel="noopener noreferrer"
        >
          We Love Fish!
        </a>
      </header>
    </div>
  );
}

export default App;
