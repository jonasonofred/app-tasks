/* Styles */
import './TodoSearch.css';





function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = event => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }


  return (
    <div className='TodoSearch'>
      <input
        className="TodoSearch--searchArea"
        placeholder="Search task"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
