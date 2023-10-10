import { useState } from "react";
import {useRef} from 'react';
function Person(){
    return (
        <div>
            <Student name="bob" changes={()=>{console.log(1)}}></Student>
        </div>
    )
}

function Student({name,changes}){
    return(
    <h1 onClick={changes}>
        {name}
    </h1>
    )
}
function List() {
  const ref=useRef()
  const change_color=()=>{
  ref.current.style.color ="#" +  Math.floor(Math.random() * 16777215).toString(16);
  ref.current.style.backgroundColor ="#" +  Math.floor(Math.random() * 16777215).toString(16);
  }
  let [index, setIndex] = useState(0);
  const [mqy, setmqy] = useState({
    name:"mqy",
    age:20,
    sex:"男",
    school:"电子科技大学大学",
    sub_major:"计算机",
  
  })
    const listItems = (
      <div>
      <li>{mqy.name}</li>
      <li onClick={()=>{setmqy({...mqy,age:mqy.age+1})}}>{mqy.age}</li>
      <li>{mqy.sex}</li>
      <li>{mqy.school}</li>
      <li>{mqy.sub_major}</li>
      <button onClick={()=>{setIndex(index+1)}}>{index}</button>
      </div>
    );

    return (
    <ul onClick={change_color} ref={ref}>
      {listItems}

      </ul>

    );
  }
  
export {Student,Person,List}