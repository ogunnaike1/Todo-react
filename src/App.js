import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  
  let todoList = {
    title,
    content,
  };

  const handleClick = () => {
    setAllTodo([...allTodo, todoList]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (index) => {
    const updatedTodos = [...allTodo];
    updatedTodos.splice(index, 1);
    setAllTodo(updatedTodos);
  };

  const handleShowEdit = (index) => {
    setTitle(allTodo[index].title)
    setContent(allTodo[index].content)
    setEditIndex(index)
    setShowEdit(false)
  };

  const handleEdit = () =>{
    allTodo[editIndex] = {title, content}
    setAllTodo([...allTodo])
    setShowEdit(true)
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
          Edit
        </button>
      </div>

        </div>

      }
    </>
  );
}

export default App;
