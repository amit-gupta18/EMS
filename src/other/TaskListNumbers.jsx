import React from 'react'

const TaskListNumbers = ({data}) => {
    // console.log("data in tasklistnumbers : " , data)
  return (
    <div className='flex screen mt-10 justify-between gap-5  '>
        <div className='px-9 py-6 rounded-xl bg-red-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl bg-blue-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl bg-lime-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-semibold'>Accepted Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl bg-orange-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-semibold'>Falied Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers 



