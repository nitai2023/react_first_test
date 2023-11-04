import "./message.css"
import { Passage1 } from "./passages/passage1"
export default function Message(){
    return (
        <div class="container">
        <header>
          大喷菇的文章
        </header>
        <article>
        <Passage1></Passage1>
        <Passage1></Passage1>
        <Passage1></Passage1>
        </article>
        <aside>
          导航
        </aside>
        <footer>
          页脚
        </footer>
      </div>
    )
}