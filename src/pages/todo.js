mport { useState } from "react";
import "./styles.css";

export default function App() {
  var itemsName = "";
  //const[itemsName,setItemsName] =useState("");
  const button = () => {
    // console.log(itemsName);
    // toDoList.push(itemsName);
    // console.log(toDoList);
    let oldArry = toDoList;
    setToDoList((oldArry) => [...oldArry, itemsName]);

    //setItemsName(itemsName)
  };
  const handleChange = (event) => {
    itemsName = event.target.value;
    // setItemsName(event.target.value);
  };
  //const toDoList=[];
  const [toDoList, setToDoList] = useState([]);

  const deleteItem = (index) => {
    let oldArry = toDoList;
    oldArry.remove(index);
    setToDoList((oldArry) => [...oldArry, itemsName]);
  };
  return (
    <div className="App">
      <span>
        <input type="text" placeholder="add items" onChange={handleChange} />
        <button onClick={() => button()}>Add</button>
      </span>
      <h1>{itemsName}</h1>
      <ul>
        {toDoList.map((data, Number) => (
          <li key={Number}>
            <h1 onClick={() => deleteItem(Number)}>{data}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
