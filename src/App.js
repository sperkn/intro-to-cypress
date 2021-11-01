import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const toDoItems = items.map((item) => <div key={item} className="listItemBlock"><li key={item} className="listItem">{item}</li><button id={items.indexOf(item)} className="deleteButton" onClick={handleDelete}>X</button></div>);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = e.target[0].value;

    setItems([...items, newItem]);

    document.querySelector("#newItemBar").value = '';
  }

  function handleDelete(e) {
    const itemIndex= e.target.id;
    const tempArr = [...items];
    
    if(tempArr.length > 1) {
      tempArr.splice(itemIndex,1);
      setItems([...tempArr]);
    } else {
      setItems([]);
    }
    
  }

  return (
    <div className="App">
        <form className="toDoForm" onSubmit={handleSubmit}>
          <h1 className="toDoHeader">To do</h1>
          <input type="text" id="newItemBar" className="textBar"/>
          <span>
          <button type="submit" className="addButton">+ ADD</button>
          </span>
        </form>
        <ul className="toDoList">
        {toDoItems}
        </ul>
    </div>
  );
}

export default App;
