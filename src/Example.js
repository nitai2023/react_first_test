import "./Example.css"
import logo from './logo512.png';
import {useRef} from 'react';
function Example(){
  const ref=useRef()
  const change_color=()=>{
  ref.current.style.color ="#" +  Math.floor(Math.random() * 16777215).toString(16);
  }
    return (
      <div id="first_example">
        <img src={logo} alt="图标" className=""/>

        <h1 id="first_h1" onClick={change_color} ref={ref}>我的第一个react组件</h1>
      </div>

    )
  }
export {Example};
