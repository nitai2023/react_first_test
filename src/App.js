import sun from "./echo.png"
import BigMushroom from "./大喷菇.jpg"
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} alt="sun" id="sun"></img>
        <div id="BigMushroom"><img src={BigMushroom} alt="BigMushroom" id="BigMushroom_img"></img> </div>
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
          <a href={`/contacts/1`}><div className="route">文章</div></a>
          <a href={`/contacts/2`}><div className="route">组件</div></a>
          <a href={`/contacts/3`}><div className="route">活动</div></a>
        </div>
  
        {/* <Link to="/Example">example组件</Link>
        <Routes>
          <Route to="/Example" component={Example}></Route>
        </Routes> */}

      </header>
    </div>
  );
}

export  {App};
