import "./components.css"
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
function Components(){
  const people = [
    {
      id: 1,
      path:`component`
    },
    {
      id: 2,
      path:`component2`
    },
    {
      id: 3,
      path:`component3`
    },
    {
        id:4,
        path:`component4`
    },
    {
        id:5,
        path:`component5`
    }
  ];
const listItems = people.map(person =>
    <Link to={`components/${person.path}`} key={person.id } className="components_nav"><li >第{person.id}个组件</li></Link>
  );
return <div id="component_body">
    <header id="component_header">组件</header>
    <div id="component_main">
    <aside id="component_aside">
        {listItems}
    </aside>
    <article id="component_article">
      <Outlet ></Outlet>
    </article>
    </div>
</div>
}
export {Components}