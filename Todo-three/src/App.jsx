import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoContainer from "./component/TodoContainer";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialItemList = [];
  const [itemList, setItemList] = useState(initialItemList);
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...itemList, { name: itemName, dueDate: itemDate }];
    setItemList(newTodoItems);
  };
  const handleDeletItem = (todoItemName) => {
    const newTodoItems = itemList.filter((item) => item.name != todoItemName);
    setItemList(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {itemList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoContainer
        listItems={itemList}
        onDelete={handleDeletItem}
      ></TodoContainer>
    </center>
  );
}
export default App;
