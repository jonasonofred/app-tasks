/* My Styles */
import './TodoList.css';





function TodoList(props) {
  return (
    <section className='Todo'>
      <h3 className='Todo--counter'>Completed {props.completed} to {props.total}</h3>
      <ul className='Todo__items'>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
