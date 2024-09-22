// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState(""); // State for current input value
//   const [todos, setTodos] = useState([]); // State for the list of todos
//   const [isEditing, setIsEditing] = useState(false); // State to track if we're editing
//   const [currentIndex, setCurrentIndex] = useState(null); // State to track the index of the todo being edited
//   const [italicIndex, setItalicIndex] = useState(null); // State to track the index of the todo being italicized

//   const handleAddTodo = () => {
//     if (todo.trim() !== "") {
//       if (isEditing) {
//         // Update the existing todo item
//         const updatedTodos = todos.map((item, index) =>
//           index === currentIndex ? todo : item
//         );
//         setTodos(updatedTodos);
//         setIsEditing(false);
//         setCurrentIndex(null);
//       } else {
//         // Add new todo to the list
//         setTodos([...todos, todo]);
//       }
//       setTodo(""); // Clear the input field
//     }
//   };

//   const handleEdit = (index) => {
//     setIsEditing(true);
//     setCurrentIndex(index);
//     setTodo(todos[index]); // Place the selected todo in the input field for editing
//   };

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//     setIsEditing(false);
//     setCurrentIndex(null);
//     setTodo(""); // Clear the input field if it was being edited
//   };

//   const handleDoubleClick = (index) => {
//     setItalicIndex(index); // Set the index of the todo to be italicized
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Enter todo"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>{isEditing ? "Update Todo" : "Add Todo"}</button>

//       <div>
//         {todos.map((todo, index) => (
//           <div key={index}>
//             <span
//               onDoubleClick={() => handleDoubleClick(index)}
//               style={{ fontStyle: italicIndex === index ? 'italic' : 'normal' }}
//             >
//               {todo}
//             </span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import { useState } from 'react'

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [italicIndex, setItalicIndex] = useState(null);

  function handleAddTodo(){
    if(todo.trim() !== ""){
      if(isEditing){
        const updatedTodos = todos.map((item, index) =>
          index === currentIndex ? todo : item
        );
        setToDos(updatedTodos);
        setIsEditing(false);
        setCurrentIndex(null);
      }
      else{
        setToDos([...todos, todo]);
      }
    }
    setToDo("");
  }
   

  function handleDoubleClick(index){
   setItalicIndex(index);
  }

  function handleDelete(index){
    const updatedTodos = todos.filter((_, i)=> i !== index);
    setToDos(updatedTodos);
    setIsEditing(false);
    setCurrentIndex(null);
    setToDo("");
  }

  function handleEdit(index){
    setIsEditing(true);
    setCurrentIndex(index);
    setToDo(todos[index]);
  }

  return (
    <div> 
        <input type="text" 
        placeholder='enter todo'
        value={todo}
        onChange={(e)=>setToDo(e.target.value)}/>
        <button onClick={handleAddTodo}>{isEditing ? 'update todo' : 'add todo'}</button>

        <div>
          {
            todos.map((todo, index)=>(
              <div>
              <span
              onDoubleClick={()=>handleDoubleClick(index)}
              style={{ fontStyle: italicIndex === index ? 'italic' : 'normal' }}
              >{todo}</span>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default App
