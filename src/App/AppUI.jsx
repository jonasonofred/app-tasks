/* My Components */
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";





function AppUI ({
  searchValue,
  setSearchValue,
  totalTodos,
  completedTodos,
  filterTodos,
  toggleCompleteTodo,
  deleteTodo
}) {

  return (
    <>
      <TodoCounter />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList total={totalTodos} completed={completedTodos}>
        {/* Se pasan las tareas filtras por letra, palabra o todas las tareas si no se hace una búsqueda */}
        {
          filterTodos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                toggleTodo={() => toggleCompleteTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            );
          })
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );

}

export { AppUI };