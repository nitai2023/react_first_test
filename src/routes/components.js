import "./components.css"
import { Component } from "./components/component"
function Components(){
    const people = [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
            id:4,
        },
        {
            id:5,
        }
      ];
    const listItems = people.map(person =>
        <Component id={person.id}></Component>
      );
    return (
        <div className="components">
            <h1 id="components_title">大喷菇的组件</h1>
            {listItems}
      </div>
    )
}
export {Components}