import React from 'react'

const CompleteTask = ({data}) => {
    //  console.log("configured data: ",data)
  return (
    <div className="flex-shrink-0 h-[15rem] w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center p-5 ">
          <h3 className="bg-red-600 px-3 py-1 text-sm  rounded-xl">{data.category}</h3>
          <h4 className="text-base">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5  text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-4">
          {data.taskDescription}
        </p>
        <div className='mt-2'>
            <button className='w-60 rounded m-4 bg-green-500 '>Completed</button>
        </div>

      </div>
  )
}

export default CompleteTask