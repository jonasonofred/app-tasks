/* Styles */
import './CreateTodoButton.css';


const miEvento = msg => {
  console.log(msg);
}


function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => miEvento('Prueba')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
