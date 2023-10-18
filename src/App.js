import sun from "./echo.png"
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} alt="sun" id="sun"></img>
        <p>
          大喷菇的blog
        </p>
        <a
          className="App-link"
          href="https://github.com/nitai2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <div id="routes">
          <div class="route">文章</div>
          <div class="route">组件</div>
          <div class="route">活动</div>
        </div>

        {/* <Link></Link> */}
      </header>
    </div>
  );
}

export default App;
