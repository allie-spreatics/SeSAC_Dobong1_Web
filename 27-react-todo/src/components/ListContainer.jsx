import DoneList from "./DoneList";
import TodoList from "./TodoList";

export function ListContainer() {
  return (
    <div className="ListContainer">
      <TodoList />
      <DoneList />
    </div>
  );
}
