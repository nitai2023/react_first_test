import "./component.css"
function Component({id}){
    return (
    <div class="component">
            <div className="component_specific">组件{id}</div>
    </div>
    )
}
export {Component}