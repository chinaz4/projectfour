import { useState } from "react";
import AddTask from "./AddTask";

function App() {
  const [addTask, setaddTask] = useState(0);



  const CreateTask = () => {
  setaddTask(prev => prev + 1);  
};

  return (
    <div className="bg-[#F5F5DC] flex flex-col gap-2.5 p-5">
      <button className="w-30 px-4 py-2 bg-blue-500" 
      onClick={CreateTask}   >
        create task
      </button>

      {Array.from({ length: addTask }).map((_, index) => (
  <AddTask key={index} addNo={index + 1} />
))}

     
    </div>
  )
}

export default App
