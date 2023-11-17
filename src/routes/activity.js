import "./activity.css"
function Activity(){
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
        <li>第{person.id}个组件</li>
      );
    return <div id="activity_body">
        <header id="activity_header">活动</header>
        <div id="activity_main">
        <aside id="activity_aside">
            {listItems}
        </aside>
        <article id="activity_article">
            主体
        </article>
        </div>
    </div>
}
export {Activity}