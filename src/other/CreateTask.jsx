import React from 'react'
import { useState , useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
 
  const [userData , setUserData]= useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  // const submitHandler = (e) => {
  //   e.preventDefault() 
  //   console.log("Task is Created . ")
  //   console.log("values are : ", taskTitle , taskDescription , taskDate , assignTo , category)
  //   setNewTask({taskTitle , taskDescription , taskDate , category , active:false , newTask:true , completed:false , failed:false})
    
 
  //   const data = userData
  //   // console.log(data)
  //   userData.employees.forEach((e) => {
  //     // console.log(e.firstName)
  //     if(e.firstName == assignTo){
  //       e.tasks.push(newTask)
  //       e.taskCounts.newTask = e.taskCounts.newTask + 1
  //       // console.log("Task is added to the employee : " , e.firstName)
  //       // console.log(e)
  //     }
  //   })
  //   setUserData(data)
  //   // console.log("fetched it ..." , userData)
  //   // localStorage.setItem('employees' , JSON.stringify(data))
     
  //   setTaskTitle(' ')
  //   setTaskDescription(' ')
  //   setTaskDate(' ')
  //   setAssignTo(' ')
  //   setCategory(' ')

  // }
  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData;

    data.employees.forEach(function (elem) {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    // console.log("new code ====",data);

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };
  

  return (
    <form 
    onSubmit={(e) => {submitHandler(e)}}
    className="flex justify-between gap-20 mt-8 p-4 rounded-lg bg-zinc-800 ">
    <div className="w-1/3 flex-col ">
      <div>
        <h3>Task Title</h3>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => {setTaskTitle(e.target.value)}}
          className="w-full mb-4 bg-transparent px-2 bg-opacity-1 border rounded-md border-gray-100"
          placeholder="Enter the task title here"
        />
      </div>
      <div>
        <h3> Date </h3>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => {setTaskDate(e.target.value)}}
          className="w-full mb-4 bg-transparent px-2 bg-opacity-1 border rounded-md border-gray-100"
          placeholder="dd/mm/yyyy"
        />
      </div>
      <div>
        <h3>Assign To </h3>
        <input
          type="text"
          value={assignTo}
          onChange={(e) => {setAssignTo(e.target.value)}}
          className="w-full mb-4 bg-transparent px-2 bg-opacity-1 border rounded-md border-gray-100"
          placeholder="Employee Name"
        />
      </div>
      <div>
        <h3>Category</h3>
        <input
          type="text"
          value={category}
          onChange={(e) => {setCategory(e.target.value)}}
          className="w-full mb-4 bg-transparent px-2 bg-opacity-1 border rounded-md border-gray-100"
          placeholder="design , dev , etc."
        />
      </div>
    </div>
    <div className="w-[40%]">
      <div>
        <h3>Description</h3>
        <textarea
          name=""
          value={taskDescription}
          id=""
          placeholder="Enter the task description here"
          cols="5"
          rows="7"
          className="w-full bg-transparent px-2 border-2 rounded-md border-gray-500"
          onChange={(e) => {setTaskDescription(e.target.value)}}
        ></textarea>
      </div>
      <button className="bg-green-600 py-2 rounded-md mt-4 w-full">
        Create Task
      </button>
    </div>
  </form>
  )
}

export default CreateTask  