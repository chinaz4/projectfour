import { useState } from "react";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);




  const CreateTask = () => {
      const newTask = {
      id: Date.now() // unique id    
    };

  setTasks(prev =>[...prev, newTask] );  
};

     const deleteTask = (id) =>{
      setTasks(prev => prev.filter(task => task.id !== id));
     } 

    
  return (
      

    <div className="bg-[#F5F5DC] flex flex-col gap-4 p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen">
      <h1 className="text-3xl text-amber-950 text-center p-10 font-bold">TODO APP</h1>
      <button className=" sm:w-40 md:w-48 lg:w-56 px-4 py-2 bg-amber-950 text-[#F5F5DC] rounded-md " 
      onClick={CreateTask}   >
        create task
      </button>
      <div className="flex flex-col space-y-4">
       {tasks.map((task, index) => (
        <AddTask
          key={task.id}
          addNo={index + 1}
          onDelete={() => deleteTask(task.id)}
         
        />
      ))}
      </div>
     
    </div>
  )
}

export default App
