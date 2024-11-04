import React from "react";

const NewTask = ({data}) => {
  // console.log("new data : " , data)
  return (
    <div className="flex-shrink-0 h-[15rem] w-[300px] bg-slate-400 rounded-xl">
      <div className="flex justify-between items-center p-5 ">
         <h3 className="bg-red-600 px-3 py-1 text-sm  rounded-xl">{data.category}</h3>
         <h4 className="text-base">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5  text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-4">
        {data.taskDescription}
      </p>
      <div className="m-2 mt-4 rounded-lg bg-green-400 p-1 ">
        <button>Accept Task</button>
      </div>
    </div>  
  );
};

export default NewTask;
