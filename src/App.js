import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          我的第一个react应用
        </p>
        <a
          className="App-link"
          href="https://github.com/nitai2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          我的github
        </a>
      </header>
    </div>
  );
}

export default App;
