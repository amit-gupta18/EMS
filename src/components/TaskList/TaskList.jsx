import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  // console.log("data in tasklist : " , data)
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 py-5 flex-nowrap mt-10 rounded-2xl w-full"
    >
      {/* <AcceptTask data={data} />
      <NewTask data={data} />
      <CompleteTask data={data} />
      <FailedTask data={data} /> */}
      {data.tasks.map((e , idx) => {
        if(e.active){
          return <AcceptTask key={idx} data={e} />
        }
        if(e.completed){
          return <CompleteTask key={idx} data ={e} />
        }
        if(e.newTask){
          return <NewTask key={idx} data = {e} />
        }
        if(e.failed){
          return <FailedTask key={idx} data = {e} />
        }
      })}
    </div>
  );
};

export default TaskList;
