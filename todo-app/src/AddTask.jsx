import { useState } from "react";

function AddTask({addNo}){
    const [name, setname] = useState("")
    return(
        <div className="bg-amber-950 rounded-2xl py-5 px-10 flex flex-col gap-y-4 text-[#F5F5DC] ">
        <h1 className="font-sans">
            Task {addNo}
        </h1>

        <input  className=" text-2xl rounded-md w-auto h-12 font-sans"
        type="text"
        value= {name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter task name" />

        <button        
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add Task
      </button>      

        </div>
    );
}

export default AddTask;