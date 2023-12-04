
import "./component.css"
import { useState } from "react";
function Component(){
    const [list,uselist]=useState([
        {
            id:0,
            text:"学习ES6",
        },
        {
            id:1,
            text:"学习react",
        },
        {
            id:2,
            text:"学习next.js",
        },
        {
            id:3,
            text:"学习sass",
        },
    ])
    const todoList=list.map(list=>
        <li key={list.id}>{list.text}</li>
    )
    const add=()=>{
        if(document.getElementById("todoInput").value){
            uselist([...list,{id:list.length,text:document.getElementById("todoInput").value}])
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