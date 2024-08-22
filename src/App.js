import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, settodos] = useState(["Todo1","Todo2"]);

  return (
    <div>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>タスク追加</button>
      <button>タスク削除 </button>
      <div>残りのタスク：０</div>
    </div>
  );
}

export default App;
