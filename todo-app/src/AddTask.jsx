import { useState } from "react";

function AddTask({addNo, onDelete}){
    const [name, setname] = useState("")
     const [completed, setCompleted] = useState(false);

    return(
        <div className="bg-amber-950 rounded-2xl py-5 px-10 flex flex-col gap-y-4 text-[#F5F5DC] ">
        <h1 className="font-sans">
            Task {addNo}
        </h1>

        <input  className={`text-2xl rounded-md w-auto h-12 font-sans ${
          completed ? "line-through" : ""
        }`}
        type="text"
        value= {name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter task name" />

        <div className="flex gap-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded  transform transition-transform duration-100
    active:scale-90 ">
          Add Task
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded  transform transition-transform duration-100
    active:scale-90"
          onClick={onDelete} 
        >
          Delete
        </button>
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded  transform transition-transform duration-100
    active:scale-90 ${
            completed ? "opacity-70" : ""
          }`}
          onClick={() => setCompleted(!completed)} 
        >
          {completed ? "Completed" : "Complete"}
        </button>
      </div>    

        </div>
    );
}

export default AddTask;