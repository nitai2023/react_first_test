function Person(){
    return (
        <div>
            <Student name="bob"></Student>
        </div>
    )
}
function Student({name}){
    return(
    <h1>
        {name}
    </h1>
    )
}
export {Student,Person}