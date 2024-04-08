import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/interface";
// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }
export default function TodoList() {
  // Todo 리스트 전체를 담을 state(배열)
  const [todos, setTodos] = useState<Todo[]>([]);

  // 새로운 Todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  // input focus를 주기위한 ref 생성
  const inputRef = useRef<HTMLInputElement>(null);

  // todos state에 input value로 담겨있는 값 추가되도록
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updatedTodo);
      setTodos(updatedTodo);
      setNewTodo("");
      focusInput();
    }
  };

  // Enter keydown시 todos 에 등록되도록
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") addTodo();
  };

  // checkbox 선택시, todo.done 을
  // false>true / true>false 로 변경
  const toggleComplete = (id: number) => {
    // 인자로 전달된 id와 todos의 요소에 있는 id 가 같은 것을 찾아서
    // done 값만 변경
    const updatedTodo = todos.map((todo) =>
      id === todo.id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(updatedTodo);
    // console.log(todos);
  };

  // input창에 focus 주기
  const focusInput = () => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus();
  };
  return (
    <div style={{ backgroundColor: "#00ff0022" }}>
      <h4>Todo list</h4>
      <input
        type="text"
        placeholder="Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={focusInput}>focus</button>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              toggle={toggleComplete}
              key={todo.id}
            />
          );
        })}
      </ul>

      <h4>done list</h4>
      <ul>
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
      </ul>
    </div>
  );
}
