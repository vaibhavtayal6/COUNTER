// //hook
// import React, { useState } from "react";

// function App() {
//   const [count,setCount]=React.useState(0) //intialising the state 
  
//   return (
//     <div>
//       <CustomButton count = {count}  setCount={setCount}></CustomButton>
      
//     </div>
//   )       
// }
 
// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }
// export default App










//todo application using react way 

//hook
import React, { useState } from "react";

function App() {
  const [todos , setTodos] = useState([{
    title : "go study ",
    description :"from 9 to 5",
    complete : true ,
  },{
    title : "go gym ",
    description :"from 9 to 5",
    complete : false 
  }]) 
  function addTodo(){
    setTodos([...todos,{
      title:"new todo",
      description:"desc of new todo"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}

    </div>
  )       
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}
export default App
