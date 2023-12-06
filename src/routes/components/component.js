
import "./component.css"
import { useState,useEffect } from "react";
import axios from "axios";
function Component(){
    const [list,setlist]=useState([
        {
            id:0,
            thing:"学习ES6",
            result:0
        },
        {
            id:1,
            thing:"学习react",
            result:0
        },
        {
            id:2,
            thing:"学习next.js",
            result:0
        },
        {
            id:3,
            thing:"学习sass",
            result:0
        },
    ])
    const todoList=list.map(list=>
        <li key={list.id}>{list.thing}</li>
    )
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:4000/shuju');
            setlist(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);

          }
        };
        fetchData();
      },[]);
    const add=()=>{
        if(document.getElementById("todoInput").value){
            setlist([...list,{id:list.length,thing:document.getElementById("todoInput").value,result:0}])
        }
 
    }
    return (
    <div className="component">
            <div className="component_specific">
                <div id="todolist">
                    <h1>To Do List</h1>
                    <div id="add">
                    <input type="text" maxLength="50" id="todoInput" placeholder="添加待办事项" />
                    <button id="add" onClick={add} >add</button>
                    </div>
                    <ul id="List">
                        {todoList}
                    </ul>
                </div>
            </div>
    </div>
    )
}
export {Component}