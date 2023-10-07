import { useState } from "react";
function Person(){
    return (
        <div>
            <Student name="bob" changes={()=>{console.log(1)}}></Student>
        </div>
    )
}
const people = [
    '凯瑟琳·约翰逊: 数学家',
    '马里奥·莫利纳: 化学家',
    '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
    '珀西·莱温·朱利亚: 化学家',
    '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
  ];
function Student({name,changes}){
    return(
    <h1 onClick={changes}>
        {name}
    </h1>
    )
}
function List() {
  let [index, setIndex] = useState(0);
    const listItems = people.map(person =>
      <div>
      <li>{person}</li>
      <button onClick={()=>{setIndex(index+1)}}>{index}</button>
      </div>
    );

    return (
    <ul>
      {listItems}

      </ul>

    );
  }
  
export {Student,Person,List}