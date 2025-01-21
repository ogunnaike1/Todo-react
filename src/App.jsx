import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showEdit, setShowEdit] = useState(true);
  const [allTodo, setAllTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  let todoList = {
    title,
    content,
  };

//   useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem("localStorageTodo"));
//   if (storedTodos) {
//     setAllTodo(storedTodos);
//   }
// }, []);


  const handleCheckedbox = (event) => {

  setIsChecked(isCheckedNow);

  if (isCheckedNow) {
    const oldTodo = JSON.parse(localStorage.getItem("localStorageTodo"));
    if (oldTodo) {
      setAllTodo(oldTodo);
    }
  } else {
   
    localStorage.setItem("localStorageTodo", JSON.stringify(allTodo));
  }
};


  const handleClick = () => {
    const updatedTodos = [...allTodo, { title, content }];
    setAllTodo(updatedTodos);
    localStorage.setItem("localStorageTodo", JSON.stringify(updatedTodos));
    setTitle("");
    setContent("");
  };

  const handleDelete = (index) => {
    const newTodo = allTodo.filter((_, i) => i !== index);
    setAllTodo(newTodo)
    localStorage.setItem("localStorageTodo", JSON.stringify(newTodo));
    // allTodo.splice(index, 1)
    // setAllTodo([... allTodo]);
  };

  const handleShowEdit = (index) => {
    setTitle(allTodo[index].title)
    setContent(allTodo[index].content)
    setEditIndex(index)
    setShowEdit(false)
  };

  const handleEdit = () =>{
    allTodo[editIndex] = {title, content}
    const updateTodo = [...allTodo]
    setAllTodo(updateTodo)
    localStorage.setItem("localStorageTodo", JSON.stringify(updateTodo));
    setShowEdit(true)
  }

  const handleCheckbox = () =>{

  }

  return (
    <>
      <h1 className="text-[80px] text-red-100 font-[600] text-center mt-[10vh]">
        Just do it
      </h1>
      <div className="flex justify-between flex-col items-center w-[40%] gap-3 m-auto">
        <input
          className="w-[90%]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title"
        />
        <input
          className="w-[90%]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a task"
        />
        <button className="bg-red-100 w-[20%]" onClick={handleClick}>
          I Got This
        </button>
        <input type="checkbox" checked={isChecked}  onChange={handleCheckedbox} name="" id="" />
      </div>

      {allTodo.map((items, index) => (
        <div key={index} className="mt-4 p-4 border border-gray-200 rounded">
          <p className="font-bold">{items.title}</p>
          <p>{items.content}</p>
          <div className="flex gap-2">
            <button
              className="bg-red-100 px-4 py-1 rounded"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="bg-red-100 px-4 py-1 rounded"
              onClick={()=> handleShowEdit(index)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}

      {showEdit ? "" : 
        <div>
        <h1 className="text-[40px] text-red-100 font-[600] text-center mt-[10vh]">
       Edit
      </h1>
      <div className="flex justify-between flex-col items-center w-[40%] gap-3 m-auto">
        <input
          className="w-[90%]"
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title"
        />
        <input
          className="w-[90%]"
          value={content}
          type='text'
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a task"
        />
        <button className="bg-red-100 w-[20%]" onClick={handleEdit}>
          save changes
        </button>
      </div>

        </div>

      }
    </>
  );
}

export default App;
