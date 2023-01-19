/* Tools */
import React from "react";

/* My Components */
import { AppUI } from "./AppUI";





/* Estos datos vendrán del Local Storage, es decir, los usuarios los ingresarán dinámicamente */
// const staticTodos = [
//   { id: '1', text: 'Comer Ramen', completed: false },
//   { id: '2', text: 'Convertirse en Hokage', completed: false },
//   { id: '3', text: 'Hablar con Kurama', completed: false },
//   { id: '4', text: 'Hablar con Kurama', completed: false },
//   { id: '5', text: 'Hablar con Kurama', completed: false },
// ];





function App() {

  /* Realizando persistencia de datos con Local Storage */
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos) {

    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];

  } else {

    parsedTodos = JSON.parse(localStorageTodos);

  }



  /* Usando el estado de React con los React Hooks */
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');



  /* Cuenta el número total de tareas existentes y cúantas de ellas ya estan completadas */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



  /* Se buscan las tareas por letra o palabra */
  const filterTodos = todos.filter(todo => todo.text.toLowerCase().match(searchValue.toLowerCase()));



  /* Función 'puente' para guardar los datos en Local Storage y actualizar el estado de las tareas. */
  const saveTodos = newTodos => {
    const stringTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringTodos);
    setTodos(newTodos);
  }



  /* Array de las tareas para las funciones de marcar como completadas y eliminar tareas */
  const newTodos = [...todos];

  /* Marca o Desmarca las tareas completadas*/
  const toggleCompleteTodo = idTodo => {
    const indexTodo = todos.findIndex(todo => todo.id === idTodo);
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    saveTodos(newTodos);
  }

  /* Elimina las tareas */
  const deleteTodo = idTodo => {
    const indexTodo = todos.findIndex(todo => todo.id === idTodo);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }



  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      filterTodos={filterTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );

}

export default App;