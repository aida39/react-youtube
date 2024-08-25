import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: "Todo1", completed: false },
    //オブジェクトとして属性と値を記述できる（ただし固定表示になる）
  ]);

  const todoNameRef = useRef();
  //refを指定したタグの要素を取得できる

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const handleAddTodo = () => {
    //コンソールに入力した値を表示させる
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null
  }

  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクの削除 </button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
