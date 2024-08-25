import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
    //オブジェクトとして属性と値を記述している
  ]);

  const todoNameRef = useRef();
  //refを指定したタグの要素を取得できる

  const handleAddTodo = () => {
    //コンソールに入力した値を表示させる
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value =null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスク追加</button>
      <button>タスク削除 </button>
      <div>残りのタスク：０</div>
    </>
  );
}

export default App;
