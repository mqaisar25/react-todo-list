import TodoItems from "./TodoItems";
const TodoContainer = ({ listItems, onDelete }) => {
  return (
    <div className="item-container">
      {listItems.map((item) => (
        <TodoItems
          todoDate={item.dueDate}
          todoName={item.name}
          onDelete={onDelete}
        ></TodoItems>
      ))}
    </div>
  );
};

export default TodoContainer;
